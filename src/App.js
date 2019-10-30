import React from 'react';

import './App.css';

function App() {
  return (
    <div className="todo-main">
      <p className="todo-main__title">
        To do list...
      </p>
      <div className="todo-main__input-field">
        <button className="check-all">
          All
        </button>
        <input className="input" type="text" placeholder="What to do?"/>
      </div>
      <div className="todo-main__list">
        <input className="check" type="checkbox"/>
        <p className="text">Hi, im one of your todo </p>
      </div>
      <div className="todo-main__list">
        <input className="check" type="checkbox"/>
        <p className="text">Hi, im one of your todo </p>
      </div>
      <div className="todo-main__list">
        <input className="check" type="checkbox"/>
        <p className="text">Hi, im one of your todo </p>
      </div>
    </div>
  );
}

export default App;
