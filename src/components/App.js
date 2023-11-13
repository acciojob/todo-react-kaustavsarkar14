
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const addTodo = ()=>{
    setTodos([...todos, newTodo])
  }
  const deleteTodo = (index)=>{
    const filteredTodos = todos.filter((todo,i)=>i!=index)
    setTodos(filteredTodos)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <input type="text" onChange={e=>setNewTodo(e.target.value)} />
        <button onClick={addTodo} >Add Todo</button>
        <ul>
          {
            todos.map((todo, i)=>{
              return <li>{todo} <button onClick={()=>deleteTodo(i)} ></button></li>
            })
          }
        </ul>
    </div>
  )
}

export default App
