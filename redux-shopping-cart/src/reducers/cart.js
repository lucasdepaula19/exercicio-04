import { addProduct, VisibilityFilters } from "../actions"

export const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: [],
}

export function todoApp(state = initialState, action) {
    switch (action.type) {
        // case SET_VISIBILITY_FILTER:
        case addProduct.ADD_PRODUCT:
            return { ...state, visibilityFilter: action.filter }
        default:
            return state
    }
}