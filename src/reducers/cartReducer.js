export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      return { ...state, cart: [{ ...action.payload }, ...state.cart] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((p) => p.id !== action.payload),
      };
    case "CHANGE_QTY":
      return {
        ...state,
        cart: state.cart.filter((p) =>
          p.id === action.payload.id ? (p.qty = action.payload.qty) : p.qty
        ),
      };

    default:
      break;
  }
};
