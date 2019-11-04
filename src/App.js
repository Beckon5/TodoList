

import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo, checkAll } from './store/actions'
import Main from './Main.jsx'

const mapStateToProps = (state) => {
    return {
      toDos: state.toDos
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addTodo: bindActionCreators(addTodo, dispatch),
      checkAll: bindActionCreators(checkAll, dispatch)
    }
  };
  
const App=(props)=>  {
  
    const { toDos, addTodo, checkAll } = props;
    return <Main toDos={toDos} addTodo={addTodo} checkAll={checkAll}/>
    
  }




export default connect(mapStateToProps, mapDispatchToProps)(App)