import { combineReducers } from "redux";
import {persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig={
  key:'root',
  storage,
  whitelist:['auth']
}


const rootReducers = combineReducers({});

export default persistReducer(persistConfig,rootReducers);