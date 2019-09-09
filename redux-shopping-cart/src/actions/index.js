export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addProduct = product => ({
    type: ADD_PRODUCT,
    product //quando a propriedade tem o mesmo nome do parametro não é necessário atribui-lo product = product
});

export const removeProduct = product => ({
    type: REMOVE_FROM_CART,
    product
  });