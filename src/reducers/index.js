import { combineReducers } from 'redux';
import shoppingReducer from './Shopping';
import urlReducer from './url';

const rootReducer = combineReducers({
  products: shoppingReducer,
  url: urlReducer,
});

export default rootReducer;
