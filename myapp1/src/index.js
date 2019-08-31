import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
    { id: 1, mes: 'HI.HOW ARE YOU', like: 15, dlike: 3 },
    { id: 2, mes: 'HI.', like: 345, dlike: 457 },
    { id: 3, mes: 'HI.LLL', like: 4357, dlike: 475 },
    { id: 4, mes: 'HI.', like: 475, dlike: 547 },
    { id: 5, mes: 'HI.LOL', like: 457, dlike: 154 },
    { id: 6, mes: 'Vanya', like: 574, dlike: 153 },
]

ReactDOM.render(<App postData={postData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
