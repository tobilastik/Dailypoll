import {createStore, applyMiddleware} from 'redux';
import appReducer from './reducers';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = createStore(persistedReducer, applyMiddleware());

export const persistor = persistStore(store);
