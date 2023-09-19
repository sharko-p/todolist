import {
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  ADD_TEXT,
  ALL_TASKS,
  IS_COMPLETED
} from "./actionsTypes";

type Task = { id: string; title: string };
type Text = { text: string };

export type PayloadValuesType = {
  [ADD_TASK]: (task: Task) => Task;
  [EDIT_TASK]: (id: string, title: string) => { id: string; title: string };
  [DELETE_TASK]: (id: string) => string;
  [ADD_TEXT]: (text: Text) => Text;
  [ALL_TASKS]: (task: Task) => Task;
  [IS_COMPLETED]: (id: string, title: string) => { id: string; title: string };
};

export const payloadValues: PayloadValuesType = {
  [ADD_TASK]: (task) => task,
  [EDIT_TASK]: (id, title) => ({ id, title }),
  [DELETE_TASK]: (id) => id,
  [ADD_TEXT]: (text) => text,
  [ALL_TASKS]: (task) => task,
  [IS_COMPLETED]: (id, title) => ({ id, title }),
};
