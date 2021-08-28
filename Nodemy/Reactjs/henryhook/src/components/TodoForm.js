import React,{useState ,useContext} from 'react'
import PropTypes from 'prop-types';
import {v4 as uuidv4 } from 'uuid';
import {ThemContext} from '../contexts/ThemContext'
import {TodoContext} from '../contexts/TodoContext'
import {ADD_TODOS} from '../reduces/types'
const TodoForm = () => {
    const [title,setTitle] = useState('');
    const {theme} = useContext(ThemContext);
    const {isLightTheme,light,dark} = theme;
    const style = isLightTheme ? light : dark;
    const onTitleChange = (event) => {
        setTitle(event.target.value);
    }
    const {dispatch} = useContext(TodoContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type:ADD_TODOS,
            payload:{
                todo: {
                    id:uuidv4(),
                    title:title,
                }
            }
        })
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmit} >
           <input
            type="text" 
            name="title" 
            placeholder="Enter To do ....." 
            onChange={onTitleChange} 
           value={title}/>
           <input type="submit" value ="Add" style={style} />
        </form>
    )
}
TodoForm.propTypes = {
    
}
export default TodoForm
