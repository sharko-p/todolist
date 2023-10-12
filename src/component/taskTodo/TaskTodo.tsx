import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { Task } from "../../types";
import {
  editTask,
  addText,
  deleteTask,
  isCompleted,
} from "../../redux/actions/actionsTodo";
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
import { instance } from "../../axios/axiosCreate";

const TaskTodo: React.FC<{ task: Task }> = ({ task }) => {
  const { value } = useSelector((state: RootState) => state.taskManager);
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  console.log("task", task);

  const handleEdit = async (id: string, title: string): Promise<void> => {
    try {
      await instance.patch(`todos/${id}`, { title });
      dispatch(editTask(id, title));
    } catch (error) {
      console.log("Ошибка изменения задачи:", error);
    }
  };

  const toggle = (task: Task): void => {
    if (isEdit) {
      handleEdit(task.id, value);
    } else {
      dispatch(addText({ text: task.title }));
    }
    setIsEdit(!isEdit);
  };

  const handleDelete = async (id: string): Promise<void> => {
    try {
      await instance.delete(`todos/${id}`);
      dispatch(deleteTask(id));
    } catch (error) {
      console.error("Ошибка при удалении задачи:", error);
    }
  };
  const handleTextClick = async (): Promise<void> => {
    try {
      const updatedTask: { isCompleted: boolean } = {
        isCompleted: task.isCompleted as boolean,
      };

      await instance.patch(`/todos/${task.id}/isCompleted`, updatedTask);

      dispatch(isCompleted(task.id, task.title));
      console.log();
    } catch (error) {
      console.error("Ошибка при обновлении статуса задачи:", error);
    }
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
              style={{
                textDecoration: task?.isCompleted ? "line-through" : "none",
              }}
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
