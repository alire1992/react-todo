import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NvaBar";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import NotFound from "./pages/NotFound";
import TodoProvider from "./contexts/TodoProvider";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/todos"
          element={
            <TodoProvider>
              <Todos />
            </TodoProvider>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
