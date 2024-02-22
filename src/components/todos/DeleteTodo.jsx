import { useContext, useState } from "react";
import TodoContext from "../../contexts/TodoContext";

const DeleteTodo = ({ todoId }) => {
  const { deleteTodos } = useContext(TodoContext);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    await deleteTodos(todoId);
  };

  const iconReplace = () => {
    if (loading)
      return (
        <span className="spinner-border spinner-border-sm text-black"></span>
      );
    return (
      <i
        onClick={handleDelete}
        className="bi bi-trash-fill fs-6"
        style={{ cursor: "pointer" }}
      ></i>
    );
  };

  return <>{iconReplace()}</>;
};

export default DeleteTodo;
