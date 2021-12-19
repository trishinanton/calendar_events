import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const rootReducer = combineReducers(reducers)

export const store = createStore(rootReducer, applyMiddleware(thunk))

// https://redux.js.org/usage/usage-with-typescript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;