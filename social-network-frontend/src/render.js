import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, sendMessage, updateNewMessageText, updatePostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => ReactDOM.render(<BrowserRouter>
    <App state={state} addPost={addPost}
         updatePostText={updatePostText}
         sendMessage={sendMessage}
         updateNewMessageText={updateNewMessageText}/>
</BrowserRouter> , document.getElementById('root'));