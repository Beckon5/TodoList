import React, { useState } from "react";

const Mark = props => {
  const { toDos, text, checkTodo, deleteTodo, item } = props;
  const [checked, setChecked] = useState(toDos[item].checked);

  return (
    <div className="todo-main__list">
      <input
        id={item}
        className="check"
        type="checkbox"
        checked={checked}
        onChange={() => {
          checkTodo();
          setChecked(toDos[item].checked);
        }}
      />
      <label className="check-label" htmlFor={item}>
        ✔
      </label>
      <p
        style={
          checked
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
        className="text"
      >
        {text}
      </p>
      <button className="close" onClick={() => deleteTodo()}>
        ×
      </button>
    </div>
  );
};

export default Mark;
