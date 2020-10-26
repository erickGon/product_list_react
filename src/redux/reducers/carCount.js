import { CART_COUNT } from "../actionTypes";

const cartCount = localStorage.getItem("cartCount");
const initialState = cartCount ? cartCount : 0;

const carCount = (state = initialState, action) => {
  switch (action.type) {
    case CART_COUNT: {
      return action.payload.count;
    }
    default: {
      return state;
    }
  }
};

export default carCount;
