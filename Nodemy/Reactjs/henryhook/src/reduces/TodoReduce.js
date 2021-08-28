import{
    ADD_TODOS,
    DELETE_TODOS,
    GET_TODOS,
    SAVE_TODOS,
} from './types.js'

export const todoReducer = (state, action) =>{
    const {type,payload} = action;
    switch(type){
        case GET_TODOS: 
            console.log('getting todo');
            const todos = localStorage.getItem('todo');
            if(todos) {state = JSON.parse(todos)}
            return state;
        case SAVE_TODOS: 
            console.log('saving todos');
            localStorage.setItem('todo',JSON.stringify(payload.todos));
            return state;
        case ADD_TODOS: 
            state = [...state,payload.todo]
            return state;
        case DELETE_TODOS: 
            state = state.filter(todo => todo.id !== payload.id)
            return state;
        default:
            return state
    }
    
}