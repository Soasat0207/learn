import React from 'react';
import PropTypes from 'prop-types';
const TodoItem = (props)=>{
    const todo = props.todoProps;
    const markComplete = props.markCompleteFunc;
    const deleteTodo = props.deleteTodoFunc;
    //Style 
    const todoItemStyle = {
        background:'#f4f4f4',
        padding:'10px',
        border:'1px solid #ccc',
        textDecoration: todo.completed ? 'line-through' : 'none',
    }
    const todoInputStyle = {
        marginRight:'20px',
    }
    const deleteButtonStyle ={
        background:'#fff000',
        colors:'#fff',
        border:'none',
        padding:'5px 9px',
        borderRadius:'50%',
        cursor:'pointer',
        float:'right',
        transform:'translateX(-50%)',
    }
    //Return
    return(
        <p style={todoItemStyle}>
            <input
                style={todoInputStyle}
                type="checkbox"
                onChange={markComplete.bind(this,todo.id)}
                checked={todo.completed}
            />
            {todo.title}
            <button onClick={deleteTodo.bind(this,todo.id)} style={deleteButtonStyle}>x</button>
        </p>
    )
}
// PropTypes 
TodoItem.protoType ={
    todoProps: PropTypes.object.isRequired,
    markCompleteFunc:PropTypes.func.isRequired,
    deleteTodoFunc:PropTypes.func.isRequired,
}

export default TodoItem;