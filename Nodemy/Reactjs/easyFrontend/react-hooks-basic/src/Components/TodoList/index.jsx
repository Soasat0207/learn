import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TodoList = props => {
    const { todos,onTodoClick}= props;
    const handleClick =(todo)=>{
        if(onTodoClick){
            onTodoClick(todo);
        }
    }
    console.log(todos)
    return (
        <div>
            <ul className="todo=list">
                {todos.map(todo =>(
                    <li 
                    key={todo.id}
                    onClick={() => handleClick(todo)}
                    >{todo.title}</li>
                ))}
            </ul>
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};
TodoList.defaultProps={
    todos:[],
    onTodoClick:null,
};
export default TodoList
