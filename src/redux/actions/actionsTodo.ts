import {
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  ADD_TEXT,
  ALL_TASKS,
  IS_COMPLETED,
} from "../actions/actionsTypes";
import { payloadValues, PayloadValuesType } from "./actionsPayload";

type ActionType =
  | typeof ADD_TASK
  | typeof EDIT_TASK
  | typeof DELETE_TASK
  | typeof ADD_TEXT
  | typeof ALL_TASKS
  | typeof IS_COMPLETED;

type Task = { id: string; title: string };
type Text = { text: string };

export type Action = {
  type: ActionType;
  payload: ReturnType<PayloadValuesType[ActionType]>;
};

export const addTask = (task: Task): Action => {
  return {
    type: ADD_TASK,
    payload: payloadValues[ADD_TASK](task),
  };
};

export const editTask = (id: string, title: string): Action => {
  return {
    type: EDIT_TASK,
    payload: payloadValues[EDIT_TASK](id, title),
  };
};

export const deleteTask = (id: string): Action => {
  return {
    type: DELETE_TASK,
    payload: payloadValues[DELETE_TASK](id),
  };
};

export const addText = (text: Text): Action => {
  return {
    type: ADD_TEXT,
    payload: payloadValues[ADD_TEXT](text),
  };
};
export const allTasks = (task: Task): Action => {
  return {
    type: ALL_TASKS,
    payload: payloadValues[ALL_TASKS](task),
  };
};
export const isCompleted = (id: string, title: string): Action => {
  return {
    type: IS_COMPLETED,
    payload: payloadValues[IS_COMPLETED](id, title),
  };
};
