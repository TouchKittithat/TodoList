import React, { useRef, useState ,createContext} from 'react'
import TodoText from './TodoText'


    export const DataContext = createContext();

function Todolist() {

    const inputRef = useRef();
    const [todoList, setTodoList] = useState([]);

    const addTodo = () => {
        const inputText = inputRef.current.value.trim();

        if(inputText === ""){
            return null;
        }

        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }
        setTodoList((prev)=> [...prev, newTodo]);
        inputRef.current.value = "";
        // console.log(inputText)
    }

    const deleteTodo = (id)=>{
        setTodoList((prvTodos)=>{
           return prvTodos.filter((todo) => todo.id !== id)
        })
    }


  return (
    <DataContext.Provider value={{todoList ,deleteTodo}}>
    <div className='py-6 mt-8'>
        <div className="container mx-auto">
            <div className='bg-white items-center px-10 py-20 rounded-xl max-w-md mx-auto'>
                <div>
                    <h1 className='mb-4 font-semibold text-2xl mr-5 '>To-Do List</h1>
                </div>
                <div className='flex'>
                    <input ref={inputRef} type='text' className='bg-slate-300 py-4 pl-2 pr-24 placeholder:text-slate rounded-l-lg' placeholder='You can Write'/>
                    <button onClick={addTodo} className='bg-green-500 rounded-r-lg p-3 text-white'>ADD</button>
                </div>
                <div>
                    {todoList.map((item)=>{
                        return <TodoText key={item.id} id={item.id} />
                    })}
                </div>
                
            </div>
        </div>
    </div>
    </DataContext.Provider>
  )
}

export default Todolist