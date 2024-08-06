import { Icon } from "@iconify/react";
import Header from "../Header/Header";
import Todo from "../todo/Todo";
import { useState } from "react";


export default function TodoList() {

const [todos, setTodos]=useState([])
const [todoTitle, setTodoTitle]=useState("")
const [status, setStatus]=useState('all')

const todoTitleHandler=(event)=>{

    setTodoTitle(event.target .value)
}

const addTodo =(event)=>{
    event.preventDefault()

    let newTodoObject={
id:todos.length +1,
title: todoTitle,
completed:false
    }

    setTodos(prevState=> {

        return [...prevState, newTodoObject]
    })

setTodoTitle("")

}

const removeTodo= (todoId)=>{

    let newTodos = todos.filter(todo => {

        return todo.id !== todoId
    })
    setTodos(newTodos)

}

const editTodo=(todoId)=>{
let newTodos= [...todos]

newTodos.forEach(todo =>{

    if(todo.id === todoId){
        todo.completed= !todo.completed
    }
})

setTodos(newTodos)

}


const statusHandler = (event) => {
    setStatus(event.target.value)
}




  return (
   <>
   <Header/>
   <form >
    <input type="text" />
    <button type="submit">
    <Icon icon="flat-color-icons:plus" />
    </button>
    <select name="todos" id="">
        <option value="all">all</option>
        <option value="completed">completed</option>
        <option value="uncompleted">uncompleted</option>
    </select>
   </form>

   <div className="todo-container">
<ul>

    <Todo/>
</ul>



   </div>
   
   </>
  )
}
