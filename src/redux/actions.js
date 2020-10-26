import { SHOW_DETAILS, SELECT_ITEM, CART_COUNT } from "./actionTypes";

export const setShowDetails = (show) => ({
  type: SHOW_DETAILS,
  payload: { show },
});
export const setSelectedItem = (item) => ({
  type: SELECT_ITEM,
  payload: { item },
});

export const setCartCount = (count) => ({
  type: CART_COUNT,
  payload: { count },
});
