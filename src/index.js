import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import DataReducer from './store/reducer';
import ReduxThunk from 'redux-thunk'

const rootReducer=combineReducers({
  data:DataReducer
})
const store=createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
