import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let postsData = [
    {
        id: 1,
        message: 'Hi how are you?',
        likes: 4,
        dislikes: 1,
    },
    {
        id: 2,
        message: 'I\'ve been graduated from university!',
        likes: 12,
        dislikes: 2,
    },
    {
        id: 3,
        message: 'The weather sucks...',
        likes: 12,
        dislikes: 11,
    }
]





ReactDOM.render(<App postsData={postsData} />, document.getElementById('root'));

