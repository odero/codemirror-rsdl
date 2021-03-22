import { basicSetup, EditorState, EditorView, CodeMirror } from '@codemirror/basic-setup';
import { javascript } from '@codemirror/lang-javascript';
import {oneDark} from "@codemirror/theme-one-dark";
import { rsdl } from './lang-rsdl';
import axios from 'axios';

const initialState = EditorState.create({
    doc: '',
    extensions: [basicSetup, rsdl(), oneDark,
        // EditorView.updateListener.of((v) => {
        //     if (v.docChanged) {
        //       console.log(v);
        //     }
        // }),
    ],
});

const view = new EditorView({
    parent: document.getElementById('editor'),
    state: initialState,
});

window.view = view;

import SwaggerUI from 'swagger-ui'
import spec from './swagger-spec';

import swaggerSpec from './swagger-spec';
SwaggerUI({
    dom_id: '#tryitview',
    spec: {},
});

const updateSpec = function () {
    // send rsdl to backend
    // reset spec from open api json response
    const newState = view.state.doc.toString();
    console.log(newState);
    axios
    .post("http://localhost:3000/", {
        data: {state: newState},
    })
    .then(({data}) => {
        console.log(data);
        SwaggerUI({
            dom_id: '#tryitview',
            spec: JSON.parse(data),
        });
    })
    .catch(err => console.error(err));
};

window.addEventListener("load",function() {
    document.getElementById("run").addEventListener("click", updateSpec);
});