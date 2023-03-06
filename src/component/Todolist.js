import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function Todolist() {

const [todos,setTodos]= useState([])

const addTodo = todo => {
// check if input is empty or have some character

    if(!todo.text || /^\s*$/.test(todo.text) ){
        return 
    }

    const newTodos =[todo , ...todos];

    setTodos(newTodos);
    
}

const removeTodo = id => {
    const removeArr=[...todos].filter(todo=> todo.id !==id)
    setTodos(removeArr)
}

const updateTodo = (todoId,newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text) ){
        return 
    }
    setTodos(prev => prev.map(item=> (item.id===todoId? newValue :item )))  
};
const completeTodo=  id => {
    let updatedTodos =todos.map(todo => {
        if(todo.id===id){
            todo.isComplete =! todo.isComplete
        }
        return todo;
    });
    setTodos(updatedTodos)
}

  return (
    <React.Fragment>
    <h1>what's the plan for Today?</h1>
    <TodoForm onSubmit={addTodo} />
    <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    
    </React.Fragment>
  )
}

export default Todolist