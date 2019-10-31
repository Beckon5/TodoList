import React from "react"

const Todo=(props)=> {
    return (
     
        <div className="todo-main__list">
          <input className="check" type="checkbox" checked={props.checked} />
          <p className="text">{props.text}</p>
          <button className="close" onClick={props.delete}>X</button>
        </div>
      
    );
  }
  
  export default Todo;