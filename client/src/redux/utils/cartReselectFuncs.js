import { createSelector } from "reselect";
const selectCart = state => state.cart;
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItem
);

export const selectQuantity = createSelector(
  [selectCartItems],
  cartItem => cartItem.reduce((counter, items) => counter + items.quantity, 0)
);

export const selectHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);
export const selectTotal = createSelector(
  [selectCartItems],
  cartItem =>
    cartItem.reduce((counter, item) => counter + item.quantity * item.price, 0)
);
