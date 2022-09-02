import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "./todoSlice";

const TodoItem = ({ text, id, completed }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeTodo(id))
  }
  return (
    <li>
      <input type="checkbox" />
      {text}
      <button onClick={handleDelete}>Удалить</button>
    </li>
  );
};

export default TodoItem;
