import React from "react";
import { Counter } from "./features/counter/Counter";
import Todo from './features/todo/Todo'
import "./App.css";
import Posts from "./features/posts/Posts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter /> */}
        <Todo />
        <Posts />
      </header>
    </div>
  );
}

export default App;
