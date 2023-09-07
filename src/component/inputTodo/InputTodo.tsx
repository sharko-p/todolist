import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions/actionsTodo";

const InputTodo: React.FC = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch();

  const handleClick = (): void => {
    dispatch(addTask({ id: text, title: text }));
    setText("");
  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <input onChange={inputChange} value={text} />
      <button onClick={handleClick}>Add</button>
    </>
  );
};

export default InputTodo;
