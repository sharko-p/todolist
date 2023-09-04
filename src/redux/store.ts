import logger from "redux-logger";
import { combineReducers, configureStore, Store } from "@reduxjs/toolkit";
import counterReducer from "./reducers/reducerTodo";

const rootReducer = combineReducers({ counter: counterReducer });

const store: Store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});

export type RootState = ReturnType<typeof rootReducer>;

export { store };
