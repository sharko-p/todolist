import InputTodo from "../../component/inputTodo/InputTodo";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../../redux/actions/actionsTodo";
import { RootState } from "../../redux/store";

import TaskTodo from "../../component/taskTodo/TaskTodo";

const Todolist = (): JSX.Element => {
  const tasks = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const handleDelete = (id: string): void => {
    dispatch(deleteTask(id));
  };

  return (
    <>
    
      <h1>Get things done!</h1>

      <InputTodo />
      {tasks.tasks.map((task) => (
        <div key={task.id}>
          <TaskTodo task={task} />
          <button onClick={() => handleDelete(task.id)}>удалить</button>
        </div>
      ))}
    </>
  );
};

export default Todolist;
