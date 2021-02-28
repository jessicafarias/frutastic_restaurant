import {
  ADD, REMOVE, SEND,
} from '../actions/index';

const initialState = 'https://wa.me/529993861435?text=Buenos+d%C3%ADas%21+Me+gustar%C3%ADa+ordernar%3A';

const addProduct = (state, product) => {
  const index = state.indexOf(product.name);
  if (index !== -1) {
    const res2 = parseInt(state.slice(index - 2, index), 10) + 1;
    const newState = state.slice(0, index - 2) + res2 + state.slice(index - 1);
    return newState;
  }
  return `${state}%0D%0A${product.quantity}.${product.name}`;
};

const removeProduct = (state, product) => {
  const index = state.indexOf(product.name);
  if (index !== -1) {
    const res2 = parseInt(state.slice(index - 2, index), 10) - 1;
    const newState = state.slice(0, index - 2) + res2 + state.slice(index - 1);
    return newState;
  }
  return `${state}%0D%0A${product.quantity}.${product.name}`;
};

const urlReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return addProduct(state, action);
    case REMOVE:
      return removeProduct(state, action);
    case SEND:
      return '';
    default:
      return state;
  }
};

export default urlReducer;
