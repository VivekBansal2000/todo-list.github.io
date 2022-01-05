import React from 'react'


function Todo({todo , toggleComplete ,removeTodo }) {

    function handleCheckBoxClick(){
        toggleComplete(todo.id);
    }

    function handleRemoveClick(){
        removeTodo(todo.id);
    }

    return (
        <div style={{display:"flex"}}>
               <input type="checkbox"  onClick={handleCheckBoxClick} style={{margin:"5px",padding:"24px"}} />
               <li
               style={{
                   color:"black",
                   fontSize: "24px",
                   listStyleType:"none",
                 
                   textDecoration: todo.completed ?"line-through" : null
               }}
               >{todo.task}</li>
               <button onClick={handleRemoveClick} style={{margin:"5px"}}  >X</button>
        </div>
    )
}

export default Todo
