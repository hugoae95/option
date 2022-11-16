import { useDispatch } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore } from 'redux-persist';

import rootReducers from "./rootReducers";

export type RootState = ReturnType<typeof rootReducers>;

export const store = createStore<RootState, any, any, any>(
    rootReducers,
    //(applyMiddleware(thunk))
    composeWithDevTools(applyMiddleware(thunk))
);

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const persistor =persistStore(store);