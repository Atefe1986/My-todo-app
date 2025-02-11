
import PropTypes from 'prop-types';

const TodoItem = (props) => {
    return (
        <div>
            {props.todos}
        </div>
    );
};

TodoItem.propTypes = {
    todos: PropTypes.array.isRequired,
};

export default TodoItem;