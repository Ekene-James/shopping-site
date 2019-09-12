import SHOP_DATA from "../data/Shop-data";

const initialState = {
  shopData: SHOP_DATA
};

const shopDataReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default shopDataReducer;
