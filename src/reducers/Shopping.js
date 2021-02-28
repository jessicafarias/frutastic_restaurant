import {
  ADD, REMOVE, SEND,
} from '../actions/index';

const initialState = [{ id: 1, quantity: 1, product_name: 'oro verde' }];

const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, {
        // FIND ID INCREASE THE CURRENT
        // IS THERE NO ID CREATE NEW STATE
        // RETURN STATE
      }];
    case REMOVE:
      return state;
      // FIND ID
      // IS THERE ID REMOVE ONE
      // IT IS JUST ONE REMOVE IT FROM THE LIST
      // RETURN NEW STATE
    case SEND:
      return [];
    default:
      return state;
  }
};

export default shoppingReducer;
