import { useContext, useEffect, useState } from "react";
import TodoContext from "../contexts/TodoContext";
import FilterTodos from "../components/todos/FilterTodos";
import CreateFilter from "../components/todos/CreateFilter";
import UpdateTodo from "../components/todos/UpdateTodo";
import DeleteTodo from "../components/todos/DeleteTodo";

const Todos = () => {
  const { todos, error, getTodos } = useContext(TodoContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     todoContext.dispatch({ type: "SET_TODOS", payload: data });
    //   });

    // axios
    //   .get("https://jsonplaceholder.typicode.com/todos")
    //   .then((response) =>
    //     todoContext.dispatch({ type: "SET_TODOS", payload: response.data })
    //   );

    // const fetchData = async () => {
    //   console.log("object");
    //   try {
    //     const response = await axios.get(
    //       "https://jsonplaceholder.typicode.com/todos"
    //     );
    //     dispatch({ type: "SET_TODOS", payload: response.data });
    //     setLoading(false);
    //   } catch (err) {
    //     setLoading(false);
    //   }
    // };
    // fetchData();

    (async () => {
      await getTodos();
      setLoading(false);
    })();
  }, [getTodos]);
  return (
    <div className="container mt-5">
      <div className="row g-3">
        <CreateFilter />
        <hr />
        <FilterTodos />
        {error && <h2 className="fw-bold text-danger">{error}</h2>}
        {loading && <div className="spinner-border text-dark"></div>}
        {todos &&
          todos.map((todo) => {
            return (
              <div className="col-md-4" key={todo.id}>
                <div className={"card " + (todo.completed && "bg-light")}>
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <div
                      className={
                        todo.completed
                          ? "text-decoration-line-through"
                          : undefined
                      }
                    >
                      {todo.title}
                    </div>
                    <div className="d-flex align-items-center">
                      <UpdateTodo todo={todo} />
                      <DeleteTodo todoId={todo.id} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Todos;
