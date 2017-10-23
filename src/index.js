import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "redux-zero/react";
import store from "./Store";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
