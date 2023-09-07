import {
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  ADD_TEXT,
} from "../actions/actionsTypes";
import {
  addTaskPayload,
  editTaskPayload,
  deleteTaskPayload,
  addTextPayload,
} from "./actionsPayload";

export const addTask = (task: { id: string; title: string }): any => {
  return {
    type: ADD_TASK,
    payload: addTaskPayload,
  };
};

export const editTask = (id: string, title: string): any => {
  return {
    type: EDIT_TASK,
    payload: { editTaskPayload },
  };
};

export const deleteTask = (id: string): any => {
  return {
    type: DELETE_TASK,
    payload: deleteTaskPayload,
  };
};

export const addText = (text: { text: string }): any => {
  return {
    type: ADD_TEXT,
    payload: addTextPayload,
  };
};
