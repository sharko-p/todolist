import { editTask } from "../../redux/actions/actionsTodo";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface Task {
  id: string;
  title: string;
}

const TaskTodo = ({ task }: { task: Task }): JSX.Element => {
  const handleEdit = (id: string, title: string): void => {
    dispatch(editTask(id, title));
  };
  const [isEdit, setIsEdit] = useState(false);
 
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const toggle = (task: Task) => {
    if (isEdit) {
      handleEdit(task.id, text);
    } else {
      setText(task.title);
    }
    setIsEdit(!isEdit);
  };
  return (
    <div key={task.id}>
      {isEdit ? (
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
          value={text}
        />
      ) : (
        <p>{task.title}</p>
      )}
      <button onClick={() => toggle(task)}>
        {isEdit ? "Сохранить" : "Изменить"}
      </button>
    </div>
  );
};

export default TaskTodo;
