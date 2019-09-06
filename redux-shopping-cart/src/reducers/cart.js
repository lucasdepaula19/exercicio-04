const initialState = {
    visibilityProducts: VisibilityProducts.SHOW_ALL,
    products: []
}

function todoApp(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return { ...state, visibilityProducts: action.filter }
        default:
            return state
    }
}