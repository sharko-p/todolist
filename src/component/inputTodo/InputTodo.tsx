import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions/actionsTodo";
import TextField from "@mui/material/TextField";
import { StyledBox, StyledButton } from "./input.style";
import { instance } from "../../axios/axiosCreate";
import { Task } from "../../types";

const InputTodo: React.FC = () => {
  const [text, setText] = useState<string>("");

  const dispatch = useDispatch();

  const handleClick = async (): Promise<void> => {
    try {
      const taskData: Task = { title: text } as Task;

      setText("");

      const response = await instance.post("/todos", taskData);

      dispatch(addTask(response.data));
    } catch (error) {
      console.error("Ошибка при добавлении таски:", error);
    }
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
        <StyledButton variant="contained" type="button" onClick={handleClick}>
          Add task
        </StyledButton>
      </StyledBox>
    </>
  );
};

export default InputTodo;
