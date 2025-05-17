/* eslint-disable react-refresh/only-export-components */

import { createContext, ReactNode, useState } from "react";
import { ICartItem, ICoffe } from "../@types/coffe";

interface ICartContext {
  setCartList: (newItem: ICartItem) => void
  cartItemsAmount: number
  cartItems: ICoffe[]
  increaseItemAmount: (coffeId: string) => void
  decreaseItemAmount: (coffeId: string) => void
}

export const CartContext = createContext({} as ICartContext)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }:CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<ICartItem[]>([])

  const cartItemsAmount = cartItems.reduce((acc, current) => {
    return acc = acc + current.amount
  }, 0) || 0

function setCartList(newItem: ICartItem) {
  const updatedCart = cartItems.some(item => item.title === newItem.title)
    ? cartItems.map(item =>
        item.title === newItem.title
          ? { ...item, amount: item.amount + newItem.amount }
          : item
      )
    : [...cartItems, newItem];

  setCartItems(updatedCart);
}

function increaseItemAmount (coffeId: string) {
  const newCartItem = cartItems.map(item => {
    if(item.id === coffeId){
      return {...item, amount: item.amount + 1}
    }

    return item
  })


  setCartItems(newCartItem)
}
function decreaseItemAmount (coffeId: string) {
  const newCartItem = cartItems.map(item => {
    if(item.id === coffeId){
      return {...item, amount: item.amount > 0 ? item.amount - 1 : 0}
    }

    return item
  })


  setCartItems(newCartItem)
}

  return (
    <CartContext.Provider value={{ cartItems, cartItemsAmount, setCartList, increaseItemAmount, decreaseItemAmount }} >
      {children}
    </CartContext.Provider>
  )
}