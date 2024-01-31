import { createContext, useContext, useEffect, useState } from "react";

const val2Context = createContext(undefined);

export const Val2Api = ({children}) => {
    const [todos,setTodos]=useState([])
    // const [user,setUser]=useState(null)

    // const setLogin=(data)=>{
    //     console.log("data in context====:>",data);
    //     localStorage.setItem('currentUser',JSON.stringify(data) )
    //     setUser(data)

    // }
    
    // useEffect(()=>{
    //     const loggedUser =localStorage.getItem("currentUser")
    //     if(loggedUser) setUser(JSON.parse(loggedUser))
    // },[  ])

    return(
        <val2Context.Provider value={{todos,setTodos}}>
            {children}
        </val2Context.Provider>
    )
}

export const useVal2Context = () => useContext(val2Context);