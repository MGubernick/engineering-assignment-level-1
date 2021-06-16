import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import the basic css for bootstrap components (Card/Modal/Button)
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

// import and utilize 'react-router-dom' HashRouter so that I can use Route in my app.js
import { HashRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

const appJsx = (
  <HashRouter>
    <App />
  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
