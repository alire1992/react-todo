import { useContext, useState } from "react";
import TodoContext from "../../contexts/TodoContext";

const CreateFilter = () => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const { addTodos } = useContext(TodoContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await addTodos(title);
    setLoading(false);
  };

  return (
    <>
      <h4>Create Todo : </h4>
      <form onSubmit={(e) => handleSubmit(e)} className="row mt-3">
        <div className="col-md-6">
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            placeholder="TODO Title..."
          />
          {!title && (
            <div className="form-text text-danger mt-2">Title is requered!</div>
          )}
        </div>

        <div className="col-auto">
          <button className="btn btn-dark" disabled={!title && true}>
            Create
            {loading && (
              <span className="spinner-border spinner-border-sm ms-2"></span>
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateFilter;
