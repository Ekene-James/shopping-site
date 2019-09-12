import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import cartReducer from "./cartReducer";
import shopDataReducer from "./shopdataReducer";
import menuItemDataReducer from "./menuItemDataReducer";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  cart: cartReducer,
  shopData: shopDataReducer,
  menuData: menuItemDataReducer
});
export default persistReducer(persistConfig, rootReducer);
