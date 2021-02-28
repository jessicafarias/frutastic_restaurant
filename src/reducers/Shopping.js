import {
  ADD, REMOVE, SEND,
} from '../actions/index';

const initialState = [{
  id: 1, quantity: 1, name: 'oro verde', price: 10,
}];

const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, {
        id: action.id,
        price: action.price,
        name: action.name,
        quantity: 1,
      }];
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
