import {
  TOGGLE_CART_ITEM,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  REDUCE_ITEM_FROM_CART
} from "../type";
export const toggleCartItem = () => dispatch => {
  return dispatch({
    type: TOGGLE_CART_ITEM
  });
};

export const addItemToCart = item => dispatch => {
  return dispatch({
    type: ADD_ITEM_TO_CART,
    payload: item
  });
};

export const removeItemFromCart = item => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: item
  };
};
export const reduceItemFromCartActions = item => {
  return {
    type: REDUCE_ITEM_FROM_CART,
    payload: item
  };
};
