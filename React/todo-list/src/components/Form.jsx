import React, {useState} from "react";

function Form(){
  const [todos, setTodos] = useState([]); //Used to track the current list
  const [todo, setTodo] = useState(""); //Used every time we add a gift

  function handleSubmit(e){
    e.preventDefault()

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false
    }
    setTodos([...todos].concat(newTodo))
    setTodo("") //Restore the second hook to default value
  }
  function deleteTodo(id){
    const updatedTodos = [...todos].filter((todo)=>todo.id!== id)
    setTodos(updatedTodos)

  }
  
 return (
   <div>

   <form onSubmit={handleSubmit}>
     <input type="text" 
     onChange={(e)=> setTodo(e.target.value)}
     value={todo} />
     <button type="submit">Add</button>
   </form>
   {todos.map((todo) => <div key={todo.id}>
     <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
     <div>{todo.text}</div>
     </div>)}
   </div>
 )
};

export default Form;