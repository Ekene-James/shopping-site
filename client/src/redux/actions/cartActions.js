import {
  TOGGLE_CART_ITEM,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  REDUCE_ITEM_FROM_CART,
  BATCH_COMMIT,
  CLEAR_CART
} from "../type";
import { firestore } from "../../components/resources/Firebase";
export const toggleCartItem = () => dispatch => {
  return dispatch({
    type: TOGGLE_CART_ITEM
  });
};

export const clearCart = () => dispatch => {
  dispatch({
    type: CLEAR_CART
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

export const addItemsToFirebase = (collectionName, itemsToadd) => dispatch => {
  const collectionRef = firestore.collection(collectionName);
  const batch = firestore.batch();

  itemsToadd.forEach(item => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, item);
  });

  return batch
    .commit()
    .then(() => {
      return dispatch({
        type: BATCH_COMMIT
      });
    })
    .catch(err => console.log(err));
};
