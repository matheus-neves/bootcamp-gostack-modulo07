import produce from 'immer';

const INITIAL_STATE = {
  products: [],
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { product } = action;
        draft.products.push(product);
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const { id } = action;
        draft.products = draft.products.filter(product => product.id !== id);
      });

    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draft => {
        const productIndex = draft.products.findIndex(
          product => product.id === action.id
        );

        if (productIndex >= 0) {
          draft.products[productIndex].amount = Number(action.amount);
        }
      });
    }

    default:
      return state;
  }
}
