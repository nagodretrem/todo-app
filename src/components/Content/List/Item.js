import React from "react";
import { useTodo } from "../../../contexts/TodoContext";
const Item = ({ todo }) => {
  const { toggleTodo, removeTodo } = useTodo();

  const onChange = (id) => toggleTodo(id);

  const onDestroy = (id) => removeTodo(id);

  return (
    <li key={todo.id} className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        <label>{todo.title}</label>
        <button onClick={() => onDestroy(todo.id)} className="destroy"></button>
      </div>
    </li>
  );
};

export default Item;
