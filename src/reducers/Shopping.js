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

const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return addProduct(state, action);
    case REMOVE:
      // FIND ID
      // IS THERE ID REMOVE ONE
      // IT IS JUST ONE REMOVE IT FROM THE LIST
      // RETURN NEW STATE
      return state;
    case SEND:
      return [];
    default:
      return state;
  }
};

export default shoppingReducer;
