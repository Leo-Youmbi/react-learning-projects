import React, { createContext, useReducer } from 'react'
import { CartReducer } from './cartReducer';

export const CartContext = createContext();

const storage = localStorage.getItem('cart')
const initialState = {
  cartItems: storage ? JSON.parse(storage) : [] 
};
const CartContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(CartReducer, initialState)

  const addProduct = payload => {
    dispatch({
      type: "ADD",
      payload
    });
  }

  const removeProduct = payload => {
    dispatch({
      type: "REMOVE",
      payload
    });
  }

  const increaseQuantity = payload => {
    dispatch({
      type: "INCQTY",
      payload
    });
  }

  const decreaseQuantity = payload => {
    dispatch({
      type: "DECQTY",
      payload
    });
  }

  const clearBasket = () => {
    dispatch({
      type: "CLEAR"
    });
    return state.cartItems;
  }

  const getCartItems = () => {
    return state.cartItems;
  }

  const contextValues = {
    addProduct,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
    clearBasket,
    getCartItems,
    ...initialState,
  }

  return (
    <CartContext.Provider value={contextValues}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;