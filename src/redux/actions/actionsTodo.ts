import { ADD_TASK, EDIT_TASK, DELETE_TASK } from "../actions/actionsTypes";

export const addTask = (task: { id: string; title: string }): any => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const editTask = (id: string, title: string): any => {
  return {
    type: EDIT_TASK,
    payload: { id, title },
  };
};

export const deleteTask = (id: string): any => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};
