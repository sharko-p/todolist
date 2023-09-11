import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { Task } from "../../types";
import { editTask, addText, deleteTask } from "../../redux/actions/actionsTodo";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextField } from "@mui/material";
import {
  StyledBox,
  StyledBoxWrapper,
  StyledTypography,
  StyledBoxButton,
  StyledBoxIsEdit,
} from "./task.style";

const TaskTodo: React.FC<{ task: Task }> = ({ task }) => {
  const { value } = useSelector((state: RootState) => state.taskManager);
  const dispatch = useDispatch();

  const handleEdit = (id: string, title: string): void => {
    dispatch(editTask(id, title));
  };

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const toggle = (task: Task): void => {
    if (isEdit) {
      handleEdit(task.id, value);
    } else {
      dispatch(addText({ text: task.title }));
    }
    setIsEdit(!isEdit);
  };

  const handleDelete = (id: string): void => {
    dispatch(deleteTask(id));
    console.log("handleDelete", id);
  };

  const handleTextClick = (): void => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div key={task.id}>
      {isEdit ? (
        <StyledBoxIsEdit>
          <TextField
            style={{ width: "85%" }}
            id="outlined-basic"
            label="Enter new value"
            variant="outlined"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(addText({ text: e.target.value }))
            }
            value={value}
          />
          <IconButton
            aria-label="check"
            size="large"
            onClick={() => toggle(task)}
          >
            <CheckIcon />
          </IconButton>
        </StyledBoxIsEdit>
      ) : (
        <StyledBox>
          <StyledBoxWrapper>
            <StyledTypography
              variant="contained"
              onClick={handleTextClick}
              style={{ textDecoration: isCompleted ? "line-through" : "none" }}
            >
              {task.title}
            </StyledTypography>
            <StyledBoxButton>
              <IconButton aria-label="edit" onClick={() => toggle(task)}>
                <EditIcon />
              </IconButton>

              <IconButton
                aria-label="delete"
                onClick={() => handleDelete(task.id)}
              >
                <DeleteIcon />
              </IconButton>
            </StyledBoxButton>
          </StyledBoxWrapper>
        </StyledBox>
      )}
    </div>
  );
};

export default TaskTodo;
