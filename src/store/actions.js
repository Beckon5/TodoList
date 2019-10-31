
import actionType from "./actionType";
const {
ADD_TODO,
DELETE_TODO,
CHECK_TODO
  } = actionType;
export const addTodo = (newTodo) => {

    return {
        type: ADD_TODO,
        payload: newTodo
    }
}
export const checkTodo = (todoToCheck) => {
    return {
        type: CHECK_TODO,
        payload: todoToCheck
    }
}


export const deleteTodo = (todoToDel) => {
    return {
        type: DELETE_TODO,
        payload: todoToDel
    }
}
