import {
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  ADD_TEXT,
} from "../actions/actionsTypes";

type Task = { id: string; title: string };
type Text = { text: string };

export type PayloadValuesType = {
  [ADD_TASK]: (task: Task) => Task;
  [EDIT_TASK]: (id: string, title: string) => { id: string; title: string };
  [DELETE_TASK]: (id: string) => string;
  [ADD_TEXT]: (text: Text) => Text;
};

export const payloadValues: PayloadValuesType = {
  [ADD_TASK]: (task) => task,
  [EDIT_TASK]: (id, title) => ({ id, title }),
  [DELETE_TASK]: (id) => id,
  [ADD_TEXT]: (text) => text,
};
