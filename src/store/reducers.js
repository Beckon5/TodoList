/* eslint-disable array-callback-return */
import actionType from "./actionType";

const initialState = {
  toDos: [
    {
      id: 0,
      checked: false,
      text: "text"
    }
  ]
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TODO:
      return { ...state, toDos: [...state.toDos, action.payload] };

    case actionType.CHECK_TODO:
      return {
        ...state,
        ...(state.toDos[action.payload].checked === true
          ? { ...(state.toDos[action.payload].checked = false) }
          : { ...(state.toDos[action.payload].checked = true) })
      };

    case actionType.CHECK_ALL: {
      return {
        ...state,
        ...state.toDos.filter(item => {
          item.checked = true;
        })
      };
    }
    case actionType.DELETE_TODO: {
      return {
        ...state,
        toDos: [...state.toDos.filter(item => item.id !== action.payload)]
      };
    }

    default:
      return state;
  }
};
