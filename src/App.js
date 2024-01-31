import logo from './logo.svg';
import './App.css';
import Test from './Test';
import { HelperApi, useHelperContext } from './context/helperContext';
import { Val2Api, useVal2Context } from './context/val2Context';
import { useEffect, useState } from 'react';
import TodoComponent from './todoComponent';


function App() {

  const {todos, setTodos} = useVal2Context();
  const [todo, setTodo] = useState({
    'heading':'',
    'details':''
})
  console.log('todos lenght ===>',todos.length);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTodo((prevData) => ({ ...prevData, [name]: value }));
  };
  console.log(todos);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setTodos((prevData) => (
      [
        ...prevData,
        todo
      ]
    ));
    
    setTodo({
      'heading':'',
      'details':''
    })



  }
  // console.log('user ===>', user);
  

  // const buttonClick=()=>{
  //   const data={
  //     "user":"ALI",
  //     "token":"sadsaffregfcxx2325"
  //   }
  //   setLogin(data);
  // }

  return (
      <div className='bg-gray-900 h-screen flex flex-col gap-y-4 items-center justify-center text-white'>
        <div className='bg-gray-800 mx-auto w-5/12 p-5 rounded-lg'>
          <h1 className='text-3xl font-bold mx-auto text-center mb-4'>To Do</h1>
          {/* Form */}
          <form onSubmit={handleSubmit} className='flex flex-col gap-y-5'>
            <div className='flex flex-col gap-y-2'>
              <label for="heading" className='text-sm font-bold'>Heading</label>
              <input id='heading' required onChange={handleChange} value={todo.heading} name="heading" placeholder='Todo Heading' className=' h-12 px-4 bg-gray-800 border border-gray-600 rounded-lg font-medium' type='text' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label for="Detail" className='text-sm font-bold'>Details</label>
              <input id='Detail' required onChange={handleChange} value={todo.details} name="details" placeholder='Add Details related to work' className=' h-12 px-4 bg-gray-800 border border-gray-600 rounded-lg ' type='text' />
            </div>

            <input id='submit' className='h-12 px-4 bg-green-700 rounded-lg  cursor-pointer' type='submit' />
          </form>
        </div>

        {/* Todo List */}
        <div className='todos w-5/12 bg-gray-800 p-5 py-8 rounded-lg'>
          <p className='font-bold text-3xl text-center pb-5'>Todo List</p>
          {todos.length === 0 ? <p className='text-gray-400'>No Items Add somthing you want to do today</p>: <p></p>}
          {
            todos.map((el, index) => (
              <TodoComponent key={index} index={index} heading={el?.heading} details={el.details} />
            ))
          }
        </div>
      </div>
     
  );
}

export default App;
