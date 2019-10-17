import { firestore } from "../../components/resources/Firebase";
import { GET_DATA_FROM_FIREBASE, IS_LOADING } from "../type";

export const getShopdata = () => dispatch => {
  dispatch(isLoading());
  return firestore
    .collection("collections")
    .get()
    .then(snapshot => {
      const stuffs = snapshot.docs.map(doc => {
        const data = doc.data();
        const id = doc.id;
        const { title, items } = data;
        return {
          id,
          title,
          items
        };
      });

      return dispatch({
        type: GET_DATA_FROM_FIREBASE,
        payload: stuffs
      });
    })
    .catch(err => {
      console.log("Error getting documents", err);
    });
};

export const isLoading = () => {
  return {
    type: IS_LOADING
  };
};

// here we jst transform d data to b like '{id, hats : {title, items : {various types of hats to b displayed}}} jst like we had it b4 putting d raw data to firebase,we kud ve used it without doing dis bt bcos most of our components ve bin rendered ds way,we take ds stress
