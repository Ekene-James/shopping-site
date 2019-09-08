import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  cart: cartReducer
});
export default rootReducer;
