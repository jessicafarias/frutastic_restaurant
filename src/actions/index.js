export const ADD = 'CREATE_BOOK';
export const REMOVE = 'REMOVE_BOOK';
export const SEND = 'CHANGE_FILTER';

export const addProductAction = product => ({
  type: ADD,
  id: product.id,
  name: product.name,
});

export const removeProductAction = product => ({
  type: REMOVE,
  id: product.id,
});

export const sendShoppingCarAction = shopping => ({
  type: SEND,
  string: shopping.url,
});
