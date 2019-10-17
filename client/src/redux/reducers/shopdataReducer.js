import { GET_DATA_FROM_FIREBASE, IS_LOADING } from "../type";

const initialState = {
  shopData: [],
  loading: false
};

const shopDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_DATA_FROM_FIREBASE: {
      return {
        ...state,
        shopData: action.payload,
        loading: false
      };
    }
    default:
      return state;
  }
};
export default shopDataReducer;
