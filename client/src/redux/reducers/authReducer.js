import {
  GET_CURRENT_USER,
  CLEAR_USER,
  SUCCESS,
  IS_LOADING,
  AUTH_ERRORS
} from "../type";

const initialState = {
  currentUser: null,
  loading: false,
  authError: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case SUCCESS: {
      return {
        ...state,
        loading: false
      };
    }
    case AUTH_ERRORS: {
      return {
        ...state,
        loading: false,
        authError: action.payload
      };
    }
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
