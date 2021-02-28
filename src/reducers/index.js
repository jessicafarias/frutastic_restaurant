import { combineReducers } from 'redux';
import shoppingReducer from './Shopping';

const rootReducer = combineReducers({
  products: shoppingReducer,
});

export default rootReducer;
