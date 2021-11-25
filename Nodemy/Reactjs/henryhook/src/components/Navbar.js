import React ,{useContext} from 'react';
import {ThemContext} from '../contexts/ThemContext'
import {AuthContext} from '../contexts/AuthContext'
import { TOGGLE_AUTH } from '../reduces/types';

const Navbar = () =>{
    //load theme context
    const {theme} = useContext(ThemContext);
    const {isLightTheme,light,dark} = theme;
    const style = isLightTheme ? light : dark;
    //load auth context
    const {isAuthenticated,dispatch} = useContext(AuthContext);
    return (
    <div className="navbar" style={style}>
        <h1>My Hooks App</h1>
        <ul>
            <li>homepage</li>
            <li>About</li>
            <li>
                {isAuthenticated ? '' :'You are logged in'}
                <button onClick={()=>{
                    dispatch({
                        type: TOGGLE_AUTH
                    })
                }}>
                    {isAuthenticated ? 'logout' :'login'}
                </button>
            </li>

        </ul>
    </div>
    )
    

    
}
export default Navbar;