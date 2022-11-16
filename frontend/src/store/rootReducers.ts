import { combineReducers } from "redux";
import {persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from '../reducers/auth.reducers';
import route from '../reducers/route.reducers';


const persistConfig={
  key:'root',
  storage,
  whitelist:['auth']
}


const rootReducers = combineReducers({
  //add reducers
  auth,
  route,
});

export default persistReducer(persistConfig,rootReducers);