
import React, { useState } from "react";

const TodoForm= () => {
    const [input, setInput] = useState('');
    return (
        <div>
            <form className="todo-form">Hello world</form>
            <input onChange={(e) => setInput(e.target.value)
            }  className="todo-input" placeholder="Add a todo " />
            <button className="todo-button">Add todo</button>
        </div>
    );
}

export default TodoForm;

