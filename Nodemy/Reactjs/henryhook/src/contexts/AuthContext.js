import React , {createContext , useState,useEffect,useReducer} from 'react';
import { authReducer } from '../reduces/AuthReduce';
export const AuthContext = createContext();
const AuthContextProvider =({children})=>{
    //sate  
    // const [isAuthenticated , setAuthentication] = useState (true)
    const [isAuthenticated,dispatch] = useReducer(authReducer,false)
    
    // useEffect
    useEffect(()=>{
        alert(isAuthenticated ? 'login success':'you are lout out')
    },[isAuthenticated])
    const authContextData={
        isAuthenticated:isAuthenticated,
        dispatch:dispatch,
    }
    return(
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;