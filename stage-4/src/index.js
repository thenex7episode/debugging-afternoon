import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { HashRouter as Hash } from 'react-router-dom'
import store from './redux/store';

ReactDOM.render(

    <Provider store={store}>
    <Hash>
        <App />
        </Hash>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
