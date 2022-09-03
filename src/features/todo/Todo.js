import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from "./todoSlice";
import TodoItem from "./TodoItem";
import styles from "./Todo.module.css";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const [todoText, setTodotext] = useState("");

  const handleAddButton = (evt) => {
    evt.preventDefault();
    dispatch(addTodo(todoText));
    setTodotext("");
  };

  return (
    <>
      <form onSubmit={(evt) => handleAddButton(evt)}>
        <input type="text" value={todoText} onChange={(evt) => setTodotext(evt.target.value)} />
        <button>Добавить</button>
      </form>
      <ul className={styles.list}>
        {
          todos.map(todo => <TodoItem key={todo.id} {...todo} />)
        }
      </ul>
    </>
  );
};

export default Todo;
