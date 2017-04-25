/// <reference path="../../vendor/npm/monaco-editor/monaco.d.ts" />

declare module 'monaco-editor/editor/editor.main' {
  import editor = monaco.editor;
  export default editor;
}

declare module 'monaco-editor/loader' {
  var loader: any;
  export default loader;
}

