
import actionType from "./actionType";
const {
ADD_TODO,
DELETE_TODO,
CHECK_TODO,
CHECK_ALL
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
export const checkAll = () => {
    return {
        type: CHECK_ALL
    }
}
