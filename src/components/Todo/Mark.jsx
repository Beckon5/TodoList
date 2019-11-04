import React, { useState} from "react";

const Mark = props => {
  const {toDos, text, checkTodo, deleteTodo, item } = props;
  const [checked, setChecked] = useState(toDos[item].checked);
  

  return (
    <div className="todo-main__list">
      <input
        className="check"
        type="checkbox"
        checked={toDos[item].checked}
        onChange={() => {
          checkTodo();
          setChecked(toDos[item].checked);
        }}
      />
      <p
        style={
          toDos[item].checked
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
        className="text"
      >
        {text}
      </p>
      <button className="close" onClick={() => deleteTodo()}>
        X
      </button>
    </div>
  );
};

export default Mark;
