
import actionType from "./actionType";
const {
ADD_TODO,
TODO_CHECK,
DELETE_TODO
  } = actionType;
export const addTodo = (newTodo) => {

    return {
        type: ADD_TODO,
        payload: newTodo
    }
}


export const checkTodo = (checkedTodo) => {
    return {
        type: TODO_CHECK,
        payload: checkedTodo
    }
}
export const deleteTodo = (todoToDel) => {
    return {
        type: DELETE_TODO,
        payload: todoToDel
    }
}
