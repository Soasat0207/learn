import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import { ThemContext } from '../contexts/ThemContext';
import {TodoContext} from '../contexts/TodoContext'
import {DELETE_TODOS} from '../reduces/types'

const TodoItem = (props) => {
    //load context 
    const {theme} = useContext(ThemContext);
    const {isLightTheme,light,dark} = theme;
    //load context todos
    const {dispatch} = useContext(TodoContext);
    const todo = props.todoProps;
    const style = isLightTheme ? light : dark;
    return (
        <li onClick={()=>{
            dispatch({
                type:DELETE_TODOS,
                payload:{
                    id:todo.id,
                }
            })
        }}  style={style}>{todo.title} </li>
    )
}
TodoItem.propTypes = {
    todoProps:PropTypes.object.isRequired,
    
}
export default TodoItem;