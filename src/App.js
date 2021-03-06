import React,{Suspense} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo, checkAll } from "./store/actions";
import Main from "./Main.jsx";

const App = props => {
  const { toDos, addTodo, checkAll } = props;

  return <Suspense fallback="loading">
  <Main toDos={toDos} addTodo={addTodo} checkAll={checkAll} />
  </Suspense>
};

const mapStateToProps = state => {
  return {
    toDos: state.toDos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: bindActionCreators(addTodo, dispatch),
    checkAll: bindActionCreators(checkAll, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
