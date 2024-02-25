import { Editor } from "@monaco-editor/react";
import "./App.css";

function App() {
  return (
    <div id="editor-wrapper">
      <Editor defaultLanguage="trinosql" theme="vs-dark" />
    </div>
  );
}

export default App;
