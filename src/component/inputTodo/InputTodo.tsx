import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions/actionsTodo";
import TextField from "@mui/material/TextField";
import { StyledBox, StyledButton } from "./input.style";

const InputTodo: React.FC = () => {

  const [text, setText] = useState<string>("");

  const dispatch = useDispatch();

  const handleClick = (): void => {
    dispatch(addTask({ id: Math.random() * 10000000 + text, title: text }));
    setText("");
  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <StyledBox>
        <TextField
          id="outlined-basic"
          label="What is the task today?"
          variant="outlined"
          onChange={inputChange}
          value={text}
        />
        <StyledButton variant="contained" type="submit" onClick={handleClick}>
          Add task
        </StyledButton>
      </StyledBox>
    </>
  );
};

export default InputTodo;
