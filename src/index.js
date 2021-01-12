import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore, appleMiddleware} from 'redux';
import {cartReducer} from './reducers/cartReducer.js';
import {Provider} from 'react-redux';


const store = createStore(cartReducer);

ReactDOM.render(
    <Provider store = {store}><App /></Provider>,
  document.getElementById('root')
);