import { editTask } from "../../redux/actions/actionsTodo";
import { addText } from "../../redux/actions/actionsTodo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface Task {
  id: string;
  title: string;
}

const TaskTodo = ({ task }: { task: Task }): JSX.Element => {
  const { value } = useSelector((state: RootState) => state.text);

  const handleEdit = (id: string, title: string): void => {
    dispatch(editTask(id, title));
  };

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const dispatch = useDispatch();

  const toggle = (task: Task): void => {
    if (isEdit) {
      handleEdit(task.id, value);
    } else {
      dispatch(addText({ text: task.title }));
    }
    setIsEdit(!isEdit);
  };

  return (
    <div key={task.id}>
      {isEdit ? (
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(addText({ text: e.target.value }))
          }
          value={value}
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
