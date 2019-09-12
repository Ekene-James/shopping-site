import { createSelector } from "reselect";
import { selectShopdata } from "./utils/dataReselectFunc";





export const selectCategories = url =>
  createSelector(
    [selectShopdata],

    shopData =>
      shopData[url]
  );
