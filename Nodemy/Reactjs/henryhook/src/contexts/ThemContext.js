import React ,{createContext , useState ,} from 'react'

export const ThemContext = createContext();

const ThemContextProvider = ({children}) =>{
    const [theme,setTheme] = useState({
        isLightTheme : false,
        light:{
            background:'rgb(240,240,240)',
            color:"black",
        },
        dark:{
            background:'rgb(39,39,39)',
            color:"white",
        }
    });
    //Function to toggle theme 
    const toggleTheme = () =>{
        setTheme({
            ...theme,
            isLightTheme : !theme.isLightTheme,
        });

    }
    //Context data 
    const themeContextData ={
        theme:theme,
        toggleTheme:toggleTheme,
    }
    // Return provider 
    return(
        <ThemContext.Provider value={themeContextData}>
            {children}
        </ThemContext.Provider>
    );
}
export default ThemContextProvider;