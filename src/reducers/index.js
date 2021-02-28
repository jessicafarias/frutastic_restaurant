import { combineReducers } from 'redux';
import shoppingReducer from './Shopping';

const rootReducer = combineReducers({
  car: shoppingReducer,
});

export default rootReducer;
