import logger from "redux-logger";
import { combineReducers, configureStore, Store } from "@reduxjs/toolkit";
import taskMenegerReducer from "./reducers/taskMenegerReducer";
import textReducer from '../redux/reducers/editReducer'

const rootReducer = combineReducers({ taskMeneger: taskMenegerReducer, text: textReducer });

const store: Store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});

export type RootState = ReturnType<typeof rootReducer>;

export { store };
