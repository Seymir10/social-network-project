import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => ReactDOM.render(<BrowserRouter>
    <App state={state} addPost={store.addPost.bind(store)}
         updatePostText={store.updatePostText.bind(store)}
         sendMessage={store.sendMessage.bind(store)}
         updateNewMessageText={store.updateNewMessageText.bind(store)}/>
</BrowserRouter> , document.getElementById('root'));

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);