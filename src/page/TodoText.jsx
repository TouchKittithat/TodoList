import React,{ useContext } from 'react'
import { DataContext } from './Todolist'

function TodoText({id}) {
  
  const { todoList, deleteTodo } = useContext(DataContext);
  const todoItem = todoList.find((todo) => todo.id === id);

  if (!todoItem) return null;

  return (
    <div className="items-center my-4">
        <div className='flex items-center justify-between'>
            <div className='items-center'>
                <p className='text-lg mr-5 word-break: break-all'>{todoItem.text}</p>
            </div>
            <div className='items-center'>
                <button onClick={()=>{deleteTodo(id)}} className='bg-red-500 rounded-xl text-white p-2'>Delete</button>
            </div>
        </div>
        <hr className='mt-3'/>
    </div>
  )
}

export default TodoText