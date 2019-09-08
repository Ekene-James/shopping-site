import {
  TOGGLE_CART_ITEM,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  REDUCE_ITEM_FROM_CART
} from "../type";
import {
  increaseCartQuantity,
  clearItemFromcart,
  reduceItemFromCart
} from "../utils/cartItem.utils";
const initialState = {
  hidden: true,
  cartItem: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_ITEM: {
      return {
        ...state,
        hidden: !state.hidden
      };
    }
    case ADD_ITEM_TO_CART: {
      return {
        ...state,
        cartItem: increaseCartQuantity(state.cartItem, action.payload)
      };
    }
    case REMOVE_ITEM_FROM_CART: {
      return {
        ...state,
        cartItem: clearItemFromcart(state.cartItem, action.payload)
      };
    }

    case REDUCE_ITEM_FROM_CART: {
      return {
        ...state,
        cartItem: reduceItemFromCart(state.cartItem, action.payload)
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
