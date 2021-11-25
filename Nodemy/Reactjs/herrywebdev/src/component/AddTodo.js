import React,{Fragment,useState}from 'react';
import PropTypes from 'prop-types';

const AddTodo =(props) =>{
    const [title,setTitles] = useState('');
    const addTodo = props.addTodoFunc;
    const AddTodoFormStyle={
        display:'flex'
    }
    const AddTodoInputStyle={
        flex:'10',
        padding:'5px',
    }
    const AddTodoSubmitStyle={
        flex:'1',   
    }
    const changeTitle =(event) => {
        setTitles(event.target.value);
    }
    const addSingleTodo = (event) => {
        event.preventDefault();
        if(title !== ''){
            addTodo(title);
            setTitles('');
        }
    }
    return (
        <Fragment>
            <form style={AddTodoFormStyle} onSubmit={addSingleTodo}>
                <input 
                style={AddTodoInputStyle} 
                type="text" 
                name="title" 
                placeholder="Add Work"
                value={title}
                onChange={changeTitle}
                />
                <input style={AddTodoSubmitStyle} type="submit" value="Add" className="btn"/>
            </form>
        </Fragment>
    )
}
AddTodo.propTypes = {
    addTodoFunc:PropTypes.func.isRequired,
}
export default AddTodo;