import InputTodo from "../../component/inputTodo/InputTodo";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import TaskTodo from "../../component/taskTodo/TaskTodo";
import { StyledBox, StyledTypography } from "./todoList.style";
import Box from "@mui/material/Box";

const Todolist = (): JSX.Element => {
  const tasks = useSelector((state: RootState) => state.taskManager);

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
        </Box>
      </StyledBox>
    </>
  );
};

export default Todolist;
