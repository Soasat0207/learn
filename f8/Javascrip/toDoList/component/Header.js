import html from '../core.js'

// event.keyCode === 13 )
function Header() {
    return html `
    <header class="header">
        <img class="header__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg">
        <h1 class="header__title">To-Do List</h1>
		
	</header>
    <from class="form">
    <label class="toDoList_today" for="todo">~ Today I need to ~</label>
    <input class="new-todo" 
            placeholder="What needs to be done?" 
            autofocus 
            onkeyup='event.keyCode === 13 && dispatch("add",this.value.trim())'
        >
    </from>
    `
}
export default Header
