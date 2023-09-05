import { ADD_TEXT } from "../actions/actionsTypes";

interface Text {
  value: string;
}

const initialState: Text = {
  value: "",
};

const reducer = (
  state: Text = initialState,
  action: { type: typeof ADD_TEXT; payload: { text: string } }
): Text => {
  switch (action.type) {
    case ADD_TEXT:
      return {
        value: action.payload.text,
      };
    default:
      return state;
  }
};

export default reducer;
