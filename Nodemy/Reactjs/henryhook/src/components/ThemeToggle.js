import React ,{useContext} from 'react'
import { ThemContext } from '../contexts/ThemContext'
const ThemeToggle = () => {
    const {toggleTheme} = useContext(ThemContext);

    return (
        <div className="toggle-btn" onClick={toggleTheme}>
         <button>Toggle Theme</button>   
        </div>
    )
}

export default ThemeToggle
