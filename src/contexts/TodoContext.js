import { createContext, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [filter, setFilter] = useState("all");

  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "Learn React",
      completed: true,
    },
  ]);

  const addTodo = (newTodo) =>
    setTodos((prev) => [
      ...prev,
      { id: uuidv4(), completed: false, title: newTodo },
    ]);

  const toggleTodo = (id) => {
    const cloned_todos = [...todos];

    const itemIndex = cloned_todos.findIndex((item) => item.id === id);
    const item = cloned_todos[itemIndex];
    item.completed = !item.completed;

    setTodos(cloned_todos);
  };

  const removeTodo = (id) => {
    const cloned_todos = [...todos];

    const itemIndex = cloned_todos.findIndex((item) => item.id === id);
    cloned_todos.splice(itemIndex, 1);

    setTodos(cloned_todos);
  };

  const clearCompleted = () => {
    const filtered = todos.filter((todo) => todo.completed === false);
    setTodos(filtered);
  };

  const values = {
    todos,
    setTodos,
    addTodo,
    toggleTodo,
    removeTodo,
    filter,
    setFilter,
    clearCompleted,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error("useTodo hook must be used within TodoProvider");
  }
  return context;
};
