import { useContext, useState } from "react";
import TodoContext from "../../contexts/TodoContext";

const UpdateTodo = ({ todo }) => {
  const { updateTodos } = useContext(TodoContext);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await updateTodos(todo);
    setLoading(false);
  };

  return (
    <>
      <i
        onClick={handleClick}
        style={{ cursor: "pointer" }}
        className={todo.completed ? "bi bi-check-all fs-4" : "bi bi-check fs-4"}
      ></i>
      {loading && (
        <span className="spinner-border spinner-border-sm text-dark ms-1 me-1"></span>
      )}
    </>
  );
};

export default UpdateTodo;
