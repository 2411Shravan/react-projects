import React from 'react';


const Form=({setinpText,setstatus,settodos,todos,inpText})=>{
    const inphandler=(e)=>{
        // console.log(e.target.value);
        setinpText(e.target.value);
    }
    const submithandler=(e)=>{
        e.preventDefault();
        settodos([
            ...todos,{text:inpText,completed:false, id: Math.random() * 100},
        ]);
        setinpText('');
    }
    const statushandler=(e)=>{
        console.log(e.target.value);
        setstatus(e.target.value);

    }

    return (
        <form>
            <input value={inpText} onChange={inphandler} type="text" className="todo-input"/>
            <button onClick={submithandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statushandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;