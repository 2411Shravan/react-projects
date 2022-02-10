import React from 'react';
import { useState } from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const[inpText,setinpText] = useState("");
  const[todos,settodos] = useState([]);
  console.log(inpText);
  console.log(todos);
  return (
    <div className="App">
      <header>
        <h1>First To-Do</h1>
      </header>
      <Form inpText={inpText} todos={todos} settodos={settodos} setinpText={setinpText}/>
      <TodoList settodos={settodos} todos={todos}/>
    </div>
  );
}

export default App;
