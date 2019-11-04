import React from "react"
import Mark from "./Mark.jsx"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteTodo, checkTodo } from '../../store/actions'
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
const Todo = (props) => {
  const {checkTodo, deleteTodo, toDos } = props;
  
  return(
    <>
  {Object.keys(toDos).map((item) => {
   
    return (
      
      
    <Mark item={item} toDos={toDos}  key={item} checkTodo={()=>checkTodo(item)} text={toDos[item].text}  deleteTodo={()=>deleteTodo(toDos[item].id)}/>

     
    )
  })}
</>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)