import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleCompleteTodo } from "./todoSlice";
import styles from './Todo.module.css'

const TodoItem = ({ body, id, completed }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTodo(id))
  }

  const handleToggle = () => { 
    dispatch(toggleCompleteTodo(id))
   }

  return (
    <li>
      <label >
        <input type="checkbox" checked={completed} onChange={handleToggle} />
        <span className={completed && styles.body}>{body}</span>
      </label>
      <button onClick={handleDelete}>Удалить</button>
    </li>
  );
};

export default TodoItem;
