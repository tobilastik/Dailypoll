import {combineReducers} from 'redux';
import poll from './poll';

const appReducer = combineReducers({
  poll,
});

export default appReducer;

export type State = ReturnType<typeof appReducer>;
