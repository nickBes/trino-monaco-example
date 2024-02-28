import "./App.css";
import { Editor } from "@monaco-editor/react";
import {
  IRange,
  languages,
} from "monaco-sql-languages/out/esm/fillers/monaco-editor-core";
import { language as trinoMonarchLanguage } from "monaco-sql-languages/out/esm/trinosql/trinosql";
import { TrinoLexer } from "./trino/TrinoLexer";
import { TrinoParser } from "./trino/TrinoParser";
import { CharStreams, CommonTokenStream, Token } from "antlr4ng";
import { CodeCompletionCore } from "antlr4-c3";
import { useRef } from "react";

const TRINO_SQL_LANGUAGE_ID = "trinosql";

function App() {
  const currentValue = useRef<string>("");

  function getTokenIndexAt(
    tokens: Token[],
    fullString: string,
    offset: number
  ): number | null {
    if (tokens.length === 0) {
      return null;
    }
    let i: number = 0;
    let lastNonEOFToken: number | null = null;
    while (i < tokens.length) {
      const token = tokens[i];
      if (token.type !== Token.EOF) {
        lastNonEOFToken = i;
      }
      if (token.start > offset) {
        if (i === 0) {
          return null;
        }
        return i - 1;
      }
      i++;
    }
    // If we didn't find the token above and the last
    // character in the autocomplete is whitespace,
    // start autocompleting for the next token
    if (/\s$/.test(fullString)) {
      return i - 1;
    }
    return lastNonEOFToken;
  }

  return (
    <div id="editor-wrapper">
      <Editor
        onChange={(value) => (currentValue.current = value ?? "")}
        defaultLanguage={TRINO_SQL_LANGUAGE_ID}
        theme="vs-dark"
        onMount={(editor, monaco) => {
          editor.updateOptions({ minimap: { enabled: false } });
          monaco.languages.register({
            id: TRINO_SQL_LANGUAGE_ID,
          });
          monaco.languages.setMonarchTokensProvider(
            TRINO_SQL_LANGUAGE_ID,
            trinoMonarchLanguage
          );
          monaco.languages.registerCompletionItemProvider(
            TRINO_SQL_LANGUAGE_ID,
            {
              provideCompletionItems: (model, position) => {
                const tables = ["table3", "table4", "table5"];
                const columns = ["id", "salary", "gender"];
                const tableRuleArray = [TrinoParser.RULE_qualifiedName];
                const tableRules = new Set(tableRuleArray);
                const columnRuleArray = [TrinoParser.RULE_identifier];
                const columnRules = new Set(columnRuleArray);
                const query = model.getValue();
                const word = model.getWordUntilPosition(position);
                const offset = model.getOffsetAt(position);

                const range: IRange = {
                  startLineNumber: position.lineNumber,
                  endLineNumber: position.lineNumber,
                  startColumn: word.startColumn,
                  endColumn: word.endColumn,
                };

                const suggestions: languages.CompletionItem[] = [];
                const inputStream = CharStreams.fromString(query);
                const lexer = new TrinoLexer(inputStream);
                const tokenStream = new CommonTokenStream(lexer);
                tokenStream.fill();
                const parser = new TrinoParser(tokenStream);
                const cc = new CodeCompletionCore(parser);
                cc.preferredRules = new Set(
                  tableRuleArray.concat(columnRuleArray)
                );
                const index =
                  getTokenIndexAt(tokenStream.getTokens(), query, offset) ?? 0;

                const candidates = cc.collectCandidates(index);

                for (const candidate of candidates.tokens) {
                  let label = parser.vocabulary.getSymbolicName(candidate[0]);

                  label =
                    label?.startsWith("'") && label.endsWith("'")
                      ? label.slice(1, label.length - 1) ?? ""
                      : label?.endsWith("_")
                      ? label.slice(0, label.length - 1)
                      : "";

                  if (label) {
                    suggestions.push({
                      label,
                      kind: languages.CompletionItemKind.Keyword,
                      insertText: label,
                      detail: "Keyword",
                      range,
                    });
                  }
                }

                for (const [rule] of candidates.rules) {
                  if (tableRules.has(rule)) {
                    for (const table of tables) {
                      suggestions.unshift({
                        label: table,
                        kind: languages.CompletionItemKind.Enum,
                        insertText: table,
                        detail: "Table",
                        range,
                      });
                    }
                  } else if (columnRules.has(rule)) {
                    for (const col of columns) {
                      for (const func of trinoMonarchLanguage.builtinFunctions) {
                        suggestions.unshift({
                          label: func as string,
                          kind: languages.CompletionItemKind.Method,
                          insertText: func as string,
                          detail: "Operator",
                          range,
                        });
                      }
                      suggestions.unshift({
                        label: col,
                        kind: languages.CompletionItemKind.EnumMember,
                        insertText: col,
                        detail: "Column",
                        range,
                      });
                    }
                  }
                }

                return { suggestions };
              },
            }
          );
        }}
      />
    </div>
  );
}

export default App;
