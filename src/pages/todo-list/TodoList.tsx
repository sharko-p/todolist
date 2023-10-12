import React, { useEffect } from "react";
import InputTodo from "../../component/inputTodo/InputTodo";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import TaskTodo from "../../component/taskTodo/TaskTodo";
import {
  StyledBox,
  StyledTypography,
  StyledTypographyForLink,
} from "./todoList.style";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { instance } from "../../axios/axiosCreate";
import { allTasks } from "../../redux/actions/actionsTodo";

const Todolist = (): JSX.Element => {
  const tasks = useSelector((state: RootState) => state.taskManager);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await instance.get("/todos");
        dispatch(allTasks(response.data));
      } catch (error) {
        console.error("Ошибка при получении задач:", error);
      }
    };

    fetchTasks();
  }, [dispatch]);

  return (
    <>
      <StyledBox>
        <Box
          sx={{
            "& > :not(style)": { margin: "20px", width: "max-content" },
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            backgroundColor: "whitesmoke",
            height: "fit-content",
          }}
        >
          <div>
            <StyledTypography variant="h5">Get things done!</StyledTypography>

            <InputTodo />
            {tasks.tasks.map((task) => (
              <div key={task.id}>
                <TaskTodo task={task} />
              </div>
            ))}
          </div>
          <StyledTypographyForLink>
            <Link to="/">Log aut</Link>
          </StyledTypographyForLink>
        </Box>
      </StyledBox>
    </>
  );
};

export default Todolist;
