import React, { useEffect, useRef, useState } from 'react'

function TodoForm(props) {

   // if edit is true update its value...else goes to add new text 
 const [input,setInput]=useState(props.edit?props.edit.value:'')

 const inputRef=useRef(null);

// to bring curson pointing on input box when page refresh 
 useEffect(()=>{
    inputRef.current.focus();
 })
// set input according to inputbox new/update
 const handleChange = e => {
    setInput(e.target.value);
 }


 //avoid  page refresh on submitting todo input text  
 const handleSubmit =e => {
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random()*10000),
        text:input
        

        
    });

    // To make out input box empty after adding todo 
        setInput('')
}


    return (
        
   <form className='todo-form' onSubmit={handleSubmit}>
        {props.edit?(
    <>
       <input 
        type='text' 
        placeholder='Update Todo' 
        value = {input}
        name='text'
        className='todo-input'
        onChange={handleChange}
        ref={inputRef}
        />
    <button className='todo-button'>Update Todo</button>
    </>
    ) : (
        <>
         <input 
        type='text' 
        placeholder='Add a todo' 
        value = {input}
        name='text'
        className='todo-input'
        onChange={handleChange}
        ref={inputRef}
        />
    <button className='todo-button'>Add Todo</button>
    </>
    )}
    
       
    </form>
 
      
   
   
  )
}

export default TodoForm