export const ADD_PRODUCT = 'ADD_PRODUCT';

export function addProduct(product) {
    return {
        type: ADD_PRODUCT,
        product //quando a propriedade tem o mesmo nome do parametro não é necessário atribui-lo product = product
    }
}