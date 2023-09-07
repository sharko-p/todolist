import logger from "redux-logger";
import { combineReducers, configureStore, Store } from "@reduxjs/toolkit";
import taskManagerReducer from "./reducers/taskManagerReducer";

const rootReducer = combineReducers({ taskManager: taskManagerReducer });

const store: Store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});

export type RootState = ReturnType<typeof rootReducer>;

export { store };
