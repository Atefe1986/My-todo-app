import "./App.css";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    console.log("add todo called", text);
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let newTodo = { id: id, text: text, isCompleted: false };
    let newTodos = [newTodo, ...todos];
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todo-app">
        <h1>Todo List</h1>

        <TodoForm addTodo={addTodo} />
        {todos.map((todo) => (
          <div key={todo.id}>
            <p>{todo.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
