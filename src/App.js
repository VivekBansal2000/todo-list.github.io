import React ,{useState,useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import TodoForm from './Compoonents/TodoForm';
import TodoList from './Compoonents/TodoList';
import Header from './Compoonents/Header';

function App() {
  const [todos,setTodos] =React.useState([]);
  const local_storage_key ="react-todo-list-todos";


  useEffect(()=>{
    const storageTodos = JSON.parse(localStorage.getItem(local_storage_key));
    if(storageTodos)
    {
      setTodos(storageTodos);
    }



  },[]);

  useEffect(()=>{
    localStorage.setItem(local_storage_key,JSON.stringify(todos));

  },[todos]);




  function addTodo(todo){
    setTodos([todo,...todos]);

  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if(todo.id ===  id){
          return{
            ...todo,
            completed : !todo.completed
          }
        };
        return todo;
      })
    );
  }

  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id  ));

  }

  return (
    <div className="App">
      <Header />
   <TodoForm addTodo={addTodo} />
   <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
