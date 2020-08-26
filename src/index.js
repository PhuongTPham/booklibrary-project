import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from './serviceWorker';
import "./assets/styles/index.scss";
import "react-datepicker/dist/react-datepicker.css";

ReactDOM.render(
  <Router basename={"/bookstore-project"}>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
