import { createSelector } from "reselect";
const selectData = state => state.shopData;
const selectMenuData = state => state.menuData;

export const selectIsLoading = createSelector(
  [selectData],
  shopData => shopData.loading
);
export const selectShopdata = createSelector(
  [selectData],
  shopData => shopData.shopData
);

export const selectMenuItemData = createSelector(
  [selectMenuData],
  menuData => menuData.sections
);
