import { legacy_createStore as createStore } from "redux";

let initialState = {
  userId: "",
  login: false,
  userName: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_USER_DATA":
      return {
        ...state,
        userId: action.payload,
      };
    case "HANDLE_USER_LOGIN":
      return {
        ...state,
        login: action.payload,
      };
    case "HANDLE_USER_NAME":
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
