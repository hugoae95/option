import { combineReducers } from "redux";
import {persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { productsReducer } from "./reducers/products.reducer";


const persistConfig={
  key:'root',
  storage,
  whitelist:['auth']
}


const rootReducers = combineReducers({
  products: productsReducer
});

export default persistReducer(persistConfig,rootReducers);