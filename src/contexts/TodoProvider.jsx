import { useCallback, useReducer } from "react";
import TodoContext from "./TodoContext";
import todoReducer from "./todoReducer";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  todos: [],
  error: null,
};

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const getTodos = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      dispatch({ type: "SET_TODOS", payload: response.data });
      dispatch({ type: "SET_ERR", payload: null });
    } catch (err) {
      dispatch({ type: "SET_ERR", payload: err.message });
      dispatch({ type: "SET_TODOS", payload: null });
    }
  }, []);

  const filterTodos = useCallback(async (num) => {
    try {
      const url =
        num !== "num"
          ? `https://jsonplaceholder.typicode.com/todos?_limit=${num}`
          : "https://jsonplaceholder.typicode.com/todos";

      const response = await axios.get(url);
      dispatch({ type: "FILTER_TODOS", payload: response.data });
      dispatch({ type: "SET_ERR", payload: null });
    } catch (err) {
      dispatch({ type: "SET_ERR", payload: err.message });
      dispatch({ type: "FILTER_TODOS", payload: null });
    }
  }, []);

  const addTodos = useCallback(async (title) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          title,
          completed: false,
        }
      );
      dispatch({ type: "ADD_TODOS", payload: response.data });
      dispatch({ type: "SET_ERR", payload: null });
      Swal.fire({
        title: "Task added!",
        icon: "success",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        toast: true,
        position: "top",
      });
    } catch (err) {
      dispatch({ type: "SET_ERR", payload: err.message });
      dispatch({ type: "ADD_TODOS", payload: null });
    }
  }, []);

  const updateTodos = useCallback(async (todo) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
        {
          title: todo.title,
          completed: !todo.completed,
        }
      );
      dispatch({ type: "UPDATE_TODOS", payload: response.data });
      dispatch({ type: "SET_ERR", payload: null });
      Swal.fire({
        title: "Task updated!",
        icon: "success",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        toast: true,
        position: "top",
      });
    } catch (err) {
      dispatch({ type: "SET_ERR", payload: err.message });
      dispatch({ type: "UPDATE_TODOS", payload: null });
    }
  }, []);

  const deleteTodos = useCallback(async (todoId) => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`
      );
      dispatch({ type: "DELETE_TODOS", payload: todoId });
      dispatch({ type: "SET_ERR", payload: null });
      Swal.fire({
        title: "Task deleted!",
        icon: "error",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        toast: true,
        position: "top",
      });
    } catch (err) {
      dispatch({ type: "SET_ERR", payload: err.message });
      dispatch({ type: "DELETE_TODOS", payload: null });
    }
  }, []);

  return (
    <TodoContext.Provider
      value={{
        ...state,
        getTodos,
        addTodos,
        filterTodos,
        updateTodos,
        deleteTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
