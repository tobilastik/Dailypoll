import {createStore, applyMiddleware} from 'redux';
import appReducer from './reducers';


export const store = createStore(appReducer, applyMiddleware());

