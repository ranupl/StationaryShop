import { BUY_ITEM } from '../Action/itemAction';

// Initial State
const initialState = {
  items: 10, // Number of items in the stationary shop
};

// Reducer
const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ITEM:
      return {
        ...state,
        items: state.items > 0 ? state.items - 1 : 0, // Decrease item count
      };
    default:
      return state;
  }
};

export default itemReducer;
