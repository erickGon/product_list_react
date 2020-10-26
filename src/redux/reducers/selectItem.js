import { SELECT_ITEM } from "../actionTypes";

const initialState = {
  id: 0,
};

const selectItem = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ITEM: {
      return action.payload.item;
    }
    default: {
      return state;
    }
  }
};

export default selectItem;
