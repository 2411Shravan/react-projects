import React from 'react';
import { useState } from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const[inpText,setinpText] = useState("");
  console.log(inpText);
  return (
    <div className="App">
      <header>
        <h1>First To-Do</h1>
      </header>
      <Form setinpText={setinpText}/>
      <TodoList/>
    </div>
  );
}

export default App;
