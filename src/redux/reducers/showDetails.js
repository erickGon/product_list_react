import { SHOW_DETAILS } from "../actionTypes";

const initialState = false;

const showDetails = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_DETAILS: {
      return action.payload.show;
    }
    default: {
      return state;
    }
  }
};

export default showDetails;
