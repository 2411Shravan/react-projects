import React from 'react';
import Todo from './Todo'

const TodoList=({todos,settodos})=>{
    console.log(todos);
    return (
        <div className="todo-container">
            <ul className="todo-list">
            {todos.map((todo)=>(
                <Todo todo={todo} settodos={settodos} todos={todos} text={todo.text} key={todo.id}/>
            ))}                  
            </ul>
        </div>
    );
};

export default TodoList;