
// Action Types
export const BUY_ITEM = 'BUY_ITEM';

// Action Creator - ensure it's exported as a named export
export const buyItem = () => {
  return {
    type: BUY_ITEM,
  };
};