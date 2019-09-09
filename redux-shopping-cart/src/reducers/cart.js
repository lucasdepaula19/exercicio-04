import { ADD_PRODUCT, REMOVE_FROM_CART } from "../actions"

export const initialState = {
    todos: [],
};

export const todoApp = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PRODUCT:
        if (state.todos.find(p => p.id === action.product.id)) {
          return state;
        }
  
        return {
          ...state,
          products: state.todos.concat(action.product)
        };
      case REMOVE_FROM_CART:
        if (state.todos.find(p => p.id === action.product.id)) {
          return {
            ...state,
            products: state.todos.filter(p => p.id !== action.product.id)
          };
        }
  
        return state
      default:
        return state;
    }
  };