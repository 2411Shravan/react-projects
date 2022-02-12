import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const[inpText,setinpText] = useState("");
  const[todos,settodos] = useState([]);
  const[status,setstatus]=useState("all");
  const[filtertodos,setfiltertodos] = useState([]);
  // console.log(inpText);
  // console.log(todos);

    useEffect(()=>{
      filterhandler();
    },[todos,status]);
  const filterhandler=()=>{
    switch (status) {
      case "completed":
        setfiltertodos(todos.filter((todo)=> todo.completed === true));
        break;
      case "uncompleted":
        setfiltertodos(todos.filter((todo)=> todo.completed === false));
        break;  
      default:
        setfiltertodos(todos);
        break;
    }
  }
  const savelocal=()=>{
      localStorage.setItem("todos", JSON.stringify(todos));
    
  }

  const getlocalstoredtodos=()=>{
    if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else{
      let todolocal= JSON.parse(localStorage.getItem("todos", JSON.stringify(todos)));
      settodos(todolocal);
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Listouts</h1>
      </header>
      <Form inpText={inpText} setstatus={setstatus} todos={todos} settodos={settodos} setinpText={setinpText}/>
      <TodoList  filtertodos={filtertodos} settodos={settodos} todos={todos}/>
    </div>
  );
}

export default App;
