import { createSelector } from "reselect";
import { selectShopdata } from "./utils/dataReselectFunc";

export const selectCategories = url =>
  createSelector(
    [selectShopdata],

    shopData => {
      const ucase = url.charAt(0).toUpperCase() + url.slice(1);

      return shopData.find(data => data.title === ucase);
    }
  );
