import React,{useState,useContext} from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import {TodoContext} from '../contexts/TodoContext'
import {AuthContext} from '../contexts/AuthContext'

const Todos = () => {
    const {todos} = useContext(TodoContext);
    const {isAuthenticated} = useContext(AuthContext);
    return (
        <div className="todo-list">
            <TodoForm />
            {
                isAuthenticated ? (
                <ul>
                    {
                        todos.map(todo => (
                            <TodoItem
                             key={todo.id} 
                             todoProps={todo} 
                             />     
                        ))
                    }
                </ul>
                ) : <p style={ {textAlign:'center'}}>You need login</p>
            }
            
        </div>
    )
}

export default Todos
