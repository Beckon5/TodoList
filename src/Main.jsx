import React, { useState } from 'react';
import './App.css';

import Todo from './components/Todo/Todo.js'
const Main = (props) => {
  const [inputText, setInputText] = useState("");
  const { toDos, addTodo,  checkAll } = props;
  
  return (

    <div className="todo-main">
      <p className="todo-main__title">
        To do list...
      </p>
      <div className="todo-main__input-field">
      
        <button className="check-all" onClick={()=>checkAll()} >
          All
        </button>
        <input className="input" type="text" placeholder="What to do?" value={inputText} onChange={(event) => { setInputText(event.target.value) }} onKeyDown={(e) => {
          if (e.key === 'Enter'){
            addTodo({
              id: toDos[toDos.length-1].id+1,
              checked: false,
              text: inputText
            }) ;setInputText("");} 
        }} />
      </div>
          <Todo />
    </div>
  );
}

export default Main;
