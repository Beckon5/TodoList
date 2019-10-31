
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
        case actionType.CHECK_TODO:
            let data = state.toDos.find((item)=>item.id==action.payload)

            console.log(data)
            // console.log(action.payload)
            // return {...state, toDos:[...state.toDos] }
        // case actionType.DELETE_TODO:
        //     return { ...state, toDos:[] };
        default: return state;
    }


}