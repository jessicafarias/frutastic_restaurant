import {
  ADD, REMOVE, SEND,
} from '../actions/index';

const initialState = [];

const addProduct = (state, product) => {
  const index = state.map(e => e.name).indexOf(product.name);
  if (index !== -1) {
    const newState = state.slice(0, index).concat(state.slice(index + 1));
    const objectUpdate = state[index];
    objectUpdate.quantity += 1;
    return [...newState, objectUpdate];
  }
  return [...state, {
    price: product.price,
    name: product.name,
    quantity: 1,
  }];
};

const removeProduct = (state, product) => {
  const index = state.map(e => e.name).indexOf(product.name);
  const newState = state.slice(0, index).concat(state.slice(index + 1));
  const objectUpdate = state[index];
  if (objectUpdate.quantity !== 1) {
    objectUpdate.quantity -= 1;
    return [...newState, objectUpdate];
  }
  return [...newState];
};

const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return addProduct(state, action);
    case REMOVE:
      return removeProduct(state, action);
    case SEND:
      return [];
    default:
      return state;
  }
};

export default shoppingReducer;
