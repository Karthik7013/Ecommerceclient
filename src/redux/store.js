import { legacy_createStore as createStore } from "redux";


let initialState = {
    userId: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HANDLE_USER_DATA':
            return {
                ...state, userId: action.payload
            }
        default:
            return state;
    }
}


const store = createStore(reducer);

export default store