import { snippetCompletion } from '@codemirror/autocomplete';

export default snippets = [
    snippetCompletion("${name}(${params})", {
        label: "function",
        detail: "definition",
        type: "keyword"
    }),
    snippetCompletion("action ${name}(${params})", {
        label: "action",
        detail: "definition",
        type: "keyword"
    }),
    snippetCompletion("type ${name} {\n\t${}\n}", {
        label: "type",
        detail: "definition",
        type: "keyword"
    }),
    snippetCompletion("service ${name} {\n\t${}\n}", {
        label: "service",
        detail: "definition",
        type: "keyword"
    }),
    snippetCompletion("enum ${name} { ${values} }", {
        label: "enum",
        detail: "definition",
        type: "keyword"
    }),
    snippetCompletion("flags ${name} { ${values} }", {
        label: "flags",
        detail: "definition",
        type: "keyword"
    }),
    snippetCompletion("@${name} : ${value}", {
        label: "annotation",
        detail: "definition",
        type: "keyword"
    }),
];
