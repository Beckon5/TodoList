import React, { useState } from "react";
import "./App.css";

import Todo from "./components/Todo/Todo.js";
const Main = props => {
  const [inputText, setInputText] = useState("");
  const { toDos, addTodo, checkAll } = props;

  const [onlyActive, setOnlyActive] = useState(false);
  const [onlyInactive, setOnlyInactive] = useState(false);

  return (
    <div className="todo-main">
      <p className="todo-main__title">To do list...</p>
      <div className="todo-main__input-field">
        <button className="check-all" onClick={() => checkAll()}>
          All
        </button>
        <input
          className="input"
          type="text"
          placeholder="What to do?"
          value={inputText}
          onChange={event => {
            setInputText(event.target.value);
          }}
          onKeyDown={e => {
            if (e.key === "Enter") {
              if (toDos.length < 1)
                addTodo({
                  id: 0,
                  checked: false,
                  text: inputText
                });
              else
                addTodo({
                  id: toDos[toDos.length - 1].id + 1,
                  checked: false,
                  text: inputText
                });
              setInputText("");
            }
          }}
        />
      </div>
      <Todo onlyActive={onlyActive} onlyInactive={onlyInactive} />
      <div className="filter-btns">
        <button
          className="btn"
          onClick={() => {
            setOnlyActive(false);
            setOnlyInactive(false);
          }}
        >
          All
        </button>
        <button
          className="btn"
          onClick={() => {
            setOnlyInactive(false);
            setOnlyActive(true);
          }}
        >
          Completed
        </button>
        <button
          className="btn"
          onClick={() => {
            setOnlyActive(false);
            setOnlyInactive(true);
          }}
        >
          In progress
        </button>
      </div>
    </div>
  );
};

export default Main;
