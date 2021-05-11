import html from '../core.js'
import {connect} from '../store.js'
const connector = connect()

function TodoItem({todo,index,editIndex }) {
    return html `
    <li class="${todo.completed && 'completed'} ${editIndex === index && 'editing'}">
        <div class="view">
            <input 
                class="toggle" 
                type="checkbox" 

                ${todo.completed && 'checked'}
                onchange = "dispatch('toggle',${index})"
            >
            <label ondblclick = "dispatch('startEdit',${index})"><ul class="toDoList__list-style">${todo.title}</ul></label>
            <button class="destroy" onclick="dispatch('destroy',${index})"></button>
        </div>
        <input class="edit" value="${todo.title}"
        
        onkeyup ="event.keyCode === 13 && dispatch('endEdit',this.value.trim()) || event.keyCode === 27 && dispatch('cancelEdit')"
        onblur = "dispatch('endEdit',this.value.trim())"
        >
    </li>
    `
}
export default connector(TodoItem)