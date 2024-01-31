import { useEffect, useState } from "react";
import { useVal2Context } from "./context/val2Context";

export default function TodoComponent(props){
    const {todos, setTodos} = useVal2Context();
    const [isEdit, setIsEdit] = useState(false);
    const [updatedTodo, setUpdatedTodo] = useState();

    console.log('updated ? ',todos);
    useEffect(() =>{
        setUpdatedTodo(todos[props.index]);
        
    },[todos])

    const SaveData = () =>{
        var repTodo = [...todos]
        repTodo[props.index] = updatedTodo;
        setTodos(repTodo);
        setIsEdit(false);
        console.log('reptodo ===>',repTodo)
    }

    const editTodo = () =>{
        setIsEdit(true);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUpdatedTodo((prevData) => ({ ...prevData, [name]: value }));
    };



    const DeleteTodo = () =>{
        const newTodoItems = [...todos];
        newTodoItems.splice(props.index, 1);
        setTodos(newTodoItems);
    }

    return(
        <div className='todo p-3 flex flex-row justify-between items-center  border-b border-gray-500'>
            <div className='flex gap-x-4 items-center '>
                <p>{props.index + 1}</p>
                {!isEdit ? 
                    <div className="">
                        <h1 className='text-xl font-bold pb-2'>{props.heading}</h1>
                        <p className='text-sm'>{props.details}</p>
                    </div>
                :
                    <div className="grow mr-3">
                        <input id='heading' onChange={handleChange} value={updatedTodo.heading} name="heading" placeholder='Todo Heading' className=' w-full px-2 mb-2 bg-gray-900 hover:bg-gray-900  border-gray-600 outline-none font-medium' type='text' />
                        <input id='Detail' onChange={handleChange} value={updatedTodo.details} name="details" placeholder='Add Details related to work' className='mr-3 w-full px-2 bg-gray-900 hover:bg-gray-900  border-gray-600 outline-none ' type='text' />

                    </div>
                }
            </div>

            {!isEdit ? 
                <div className='flex gap-x-2'>
                    <button className='bg-green-700 px-3 py-1 rounded-md ' onClick={editTodo}>Edit</button>
                    <button className='bg-red-800 px-3 py-1 rounded-md' onClick={DeleteTodo}>Delete</button>
                </div>
            :
                <div className='flex gap-x-2'>
                    <button className='bg-green-700 px-3 py-1 rounded-md' onClick={SaveData}>Save</button>
                    <button className='bg-red-800 px-3 py-1 rounded-md' onClick={() => setIsEdit(false)}>Cancel</button>
                </div>
            }
        </div>  
    )
}