/* eslint-disable array-callback-return */
import React from "react"
import Mark from "./Mark.jsx"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteTodo, checkTodo } from '../../store/actions'
import PropTypes from 'prop-types';
const Todo = (props) => {

  const { onlyActive, onlyUnactive, checkTodo, deleteTodo, toDos } = props;

  return (

    <>
      {Object.keys(toDos).map((item) => {
        if (onlyActive & toDos[item].checked
          ||
          onlyUnactive & !toDos[item].checked 
          ||
           !onlyUnactive & !onlyActive)
          return (
            <Mark item={item} toDos={toDos} key={item} checkTodo={() => checkTodo(item)} text={toDos[item].text} deleteTodo={() => deleteTodo(toDos[item].id)} />

          )
      })}
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    toDos: state.toDos
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: bindActionCreators(deleteTodo, dispatch),
    checkTodo: bindActionCreators(checkTodo, dispatch)
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo)

Todo.propTypes = {
  onlyActive: PropTypes.bool,
  onlyUnactive: PropTypes.bool,
  checkTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  toDos: PropTypes.array
};