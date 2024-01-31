import { useContext,createContext,useState } from "react";


const HelperContext = createContext(undefined);


export const HelperApi =({children})=>{
    const [isLogin,setIslogin]=useState()


    return(
        <HelperContext.Provider
        value={{
            isLogin,
            setIslogin
        }}
        >{children}</HelperContext.Provider>
    )
}

export const useHelperContext = () => useContext(HelperContext);