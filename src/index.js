import { basicSetup, EditorState, EditorView, CodeMirror } from '@codemirror/basic-setup';
import { javascript } from '@codemirror/lang-javascript';
import {oneDark} from "@codemirror/theme-one-dark";
import { billz } from './lang-billz';

const initialState = EditorState.create({
    doc: '',
    extensions: [basicSetup, rsdl(), oneDark],
});

const view = new EditorView({
    parent: document.getElementById('editor'),
    state: initialState,
});

window.view = view;
