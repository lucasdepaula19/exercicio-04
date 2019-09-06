const ADD_PRODUCT = 'ADD_PRODUCT';

export function addProduct(product) {
    return {
        type: ADD_PRODUCT,
        product //quando a propriedade tem o mesmo nome do parametro não é necessário atribui-lo product = product
    }
}

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}