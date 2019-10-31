
import actionType from "./actionType";

const initialState = {
    toDos: [
        {
            "id": 0,
            "checked": false,
            "text": "im todo, baby!"
        }
        
    ]

}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_TODO:
            return { ...state, toDos:[...state.toDos, action.payload] };
        case actionType.TODO_CHECK:
            return { ...state, toDos: action.payload };
        case actionType.DELETE_TODO:
            return { ...state, toDos: action.payload };
        default: return state;
    }


}