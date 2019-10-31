import React, { useState } from "react"

const Todo = (props) => {
  const { text, del } = props;
  const [checked, setChecked] = useState(false)
  return (

    <div className="todo-main__list">

      <input id="check" className="check" value={checked} type="checkbox" onClick={() => {setChecked(!checked);props.check()}} />
      <p style={checked ? { textDecoration: "line-through" } : { textDecoration: "none" }} className="text">{text}</p>
      <button className="close" onClick={del}>X</button>
    </div>

  );
}

export default Todo;