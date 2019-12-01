import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import {Provider} from 'react-redux';
import configureStore from './store/store';
import "./css/style.css"

const store = configureStore();
const JSXTemp = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(JSXTemp , document.getElementById("MainContainer"));