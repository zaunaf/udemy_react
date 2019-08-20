import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
// import createHistory from 'history/createBrowserHistory';
import { createBrowserHistory as createHistory } from 'history'
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {Route} from 'react-router';
import App from "./components/App";
import reducer from "./reducer";
import thunkMiddleware from 'redux-thunk';
import { tokenMiddleware } from './middleware';
// const store = createStore(
//     state => state
// );
const store = createStore(
    reducer, 
    applyMiddleware(thunkMiddleware, tokenMiddleware)
);
const history = createHistory();

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={App}/>
        </ConnectedRouter>
    </Provider>
    
), document.getElementById('root'));