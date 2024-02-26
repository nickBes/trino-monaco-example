import "./App.css";
import { Editor } from "@monaco-editor/react";
import { language } from "monaco-sql-languages/out/esm/trinosql/trinosql";

const TRINO_SQL_LANGUAGE_ID = "trinosql";

function App() {
  return (
    <div id="editor-wrapper">
      <Editor
        defaultLanguage={TRINO_SQL_LANGUAGE_ID}
        theme="vs-dark"
        onMount={(editor, monaco) => {
          editor.updateOptions({ minimap: { enabled: false } });
          monaco.languages.register({
            id: TRINO_SQL_LANGUAGE_ID,
          });
          monaco.languages.setMonarchTokensProvider(
            TRINO_SQL_LANGUAGE_ID,
            language
          );
        }}
      />
    </div>
  );
}

export default App;
