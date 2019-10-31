import React, { useState } from 'react';
import './App.css';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Todo from './components/Todo/Todo'
import { deleteTodo, addTodo } from './store/actions'
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    toDos: state.toDos
  }
}

const putActionsToProps = (dispatch) => {
  return {
    deleteTodo: bindActionCreators(deleteTodo, dispatch),
    addTodo: bindActionCreators(addTodo, dispatch)

  }
};
const App = (props) => {
  const [inputText, setInputText] = useState("");
  const { toDos, deleteTodo, addTodo } = props;


  return (

    <div className="todo-main">

      <p className="todo-main__title">
        To do list...
      </p>
      <div className="todo-main__input-field">
        <button className="check-all" >
          All
        </button>
        <input className="input" type="text" placeholder="What to do?" value={inputText} onChange={(event) => { setInputText(event.target.value) }} onKeyDown={(e) => {
          if (e.key === 'Enter')
            addTodo({
              id: toDos.length, checked: false,
              text: inputText
            }) && setInputText("")
        }} />
      </div>
      {Object.keys(toDos).map((item) => {
        return (
          <Todo key={toDos[item].id} checked={toDos[item].checked} text={toDos[item].text} />
        )
      })}

    </div>
  );
}

export default connect(mapStateToProps, putActionsToProps)(App);
