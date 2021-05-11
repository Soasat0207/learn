import html from '../core.js'
import { connect } from '../store.js'
import Header from '../component/Header.js'
import Footer from '../component/Footer.js'
import TodoList from '../component/TodoList.js'

const connector = connect()
function App({todos}){
    return html`
    <section class="todoapp">
        ${Header()}
        ${todos.length > 0 ? TodoList() : null}
        ${todos.length > 0 ? Footer() : null}
        
    </section>
    `
}
export default connector(App)