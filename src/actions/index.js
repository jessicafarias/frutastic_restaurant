export const ADD = 'CREATE_BOOK';
export const REMOVE = 'REMOVE_BOOK';
export const SEND = 'CHANGE_FILTER';

export const addProduct = product => ({
  type: ADD,
  id: product.id,
  name: product.name,
});

export const removeProduct = product => ({
  type: REMOVE,
  id: product.id,
});

export const sendShoppingCar = shopping => ({
  type: SEND,
  string: shopping.url,
});
