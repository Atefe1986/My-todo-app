
import { useState } from "react";
import PropTypes from 'prop-types';


const TodoForm= (props) => {


    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput('');
        props.addTodo(input);
    }

    return (
        <>
            <form onSubmit={handleSubmit}
            className="todo-form"></form>
            <input id="todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}  className="todo-input" placeholder="Add a todo " />
            <button type= "submit" className="todo-button">Add todo</button>
        </>
    );
}
TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

export default TodoForm;


