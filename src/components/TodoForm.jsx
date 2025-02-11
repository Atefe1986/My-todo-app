import { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    console.log("handle submit");
    e.preventDefault();
    props.addTodo(input);
    setInput("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          id="todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="todo-input"
          placeholder="Add a todo "
        />
        <button type="submit" className="todo-button">
          Add todo
        </button>
      </form>
    </>
  );
};
TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
