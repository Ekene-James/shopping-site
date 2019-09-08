import { GET_CURRENT_USER, CLEAR_USER } from "../type";

const initialState = {
  currentUser: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_USER: {
      return {
        ...state,
        currentUser: action.payload
      };
    }
    case CLEAR_USER: {
      return {
        ...state,
        currentUser: null
      };
    }
    default:
      return state;
  }
};
export default authReducer;
