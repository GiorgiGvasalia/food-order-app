import { createContext, useReducer } from "react";


// Cart Context 
const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

// Cart reducer for adding and removing meal item

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
// finding if meal item is already in cart so its quantity will only change from cart
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingItemIndex > -1) {
      const existingItem = state.items[existingItemIndex]; // here is existing meal item
      const updatedItem = { // updated quantity of meal item in cart
        existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

 

  return state
}

export function CartContextProvider({ children }) {
  useReducer(cartReducer, { items: [] });

  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;
