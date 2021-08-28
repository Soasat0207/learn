import React, {createContext,useState,useEffect,useReducer} from 'react';
import {todoReducer} from '../reduces/TodoReduce'
import {GET_TODOS,SAVE_TODOS} from '../reduces/types'
export const TodoContext = createContext();
const TodoProvider = ({children}) =>{
    // const [todos,setTodoState] = useState([]);
    const [todos,dispatch] = useReducer(todoReducer,[])
    // useEffect
    
    useEffect(()=>{
        dispatch({
            type:GET_TODOS,
            payload:null
        });
    },[])
    useEffect(()=>{
        // console.log('saving todos');
        // localStorage.setItem('todo',JSON.stringify(todos));
        dispatch({
            type:SAVE_TODOS,
            payload:{ todos }
        });
    },[todos])
    // const addTodo = (todo) => {
    //     setTodoState([...todos,todo]);
    // }
    // const deleteTodo = (id) => {
    //     setTodoState(todos.filter(todo => todo.id !== id));
    // }
    const TodoData = {
        todos:todos,
        dispatch:dispatch,
        // addTodo:addTodo,
        // deleteTodo:deleteTodo,
    }
    return(
        <TodoContext.Provider value={TodoData}>
            {children}
        </TodoContext.Provider>
    )

}
export default TodoProvider;