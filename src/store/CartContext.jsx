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

  if(action.type === 'REMOVE_ITEM'){
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    
    const existingCartItem = state.items[existingItemIndex]
    const updatedItems = [...state.items]
    if( existingCartItem.quantity === 1){
      updatedItems.splice(existingItemIndex, 1)
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity -1
      }
      updatedItems[existingItemIndex] = updatedItem
    }
    return { ...state, items: updatedItems}
  }

  return state
}

export function CartContextProvider({ children }) {
  const [ cart, dispatchCartAction ] = useReducer(cartReducer, { items: [] });

  
  function addItem(item){
    dispatchCartAction({
      type: 'ADD_ITEM',
      item
    })
  }
  
  function removeItem(id){
    dispatchCartAction({
      type: 'REMOVE_ITEM',
      id
    })
  }
  
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem
  }

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}

export default CartContext;
