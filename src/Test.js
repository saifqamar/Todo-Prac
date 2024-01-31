import { useVal2Context } from "./context/val2Context"


const Test = () =>{
    const {setIslogin} = useVal2Context()
    return(<>
        <button
            onClick={(()=>{ setIslogin("user logged out")})}
        >
            shanto mant0o
        </button>
    </>)
}


export default Test;