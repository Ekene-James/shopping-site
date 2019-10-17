import { ERRORS } from "../type";
const initialState = {
  errors: ""
};
const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERRORS: {
      return {
        ...state,
        errors: action.payload
      };
    }

    default:
      return state;
  }
};
export default errorReducer;
