'use client'
import CartItem from '@/components/CartItem'
import React, { Children, createContext, use, useEffect, useState } from 'react'

export const CartContext = createContext()

function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  let tempCart
  
  if (cart === null) {
    setCart([])
  }
 
  const addToCart = (id, product) => {
   
    const newItem = { ...product, amount: 1 }

    // check if item already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id
    })
    if (cartItem) {
      const newCart = [...cart].map(item => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 }
        }
        else {
          return item
        }
      })
      setCart(newCart)
      localStorage.setItem('Cart',JSON.stringify(newCart))
    }    
    else {
      setCart([...cart,newItem])  
      localStorage.setItem('Cart',JSON.stringify([...cart,newItem]))
    }
  }
  

  
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('Cart')))
  },[])
 
  const removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id
    })
    // sessionStorage.setItem('Cart',JSON.stringify(newCart))
    setCart(newCart)
    localStorage.setItem('Cart',JSON.stringify(newCart))
  }

  const decreaseAmount = (id) => {
    const cartItem = cart.find(item => {
      return item.id === id
    })
    if (cartItem) {
      const newCart = [...cart].map(item => {
        if (item.id === id) {
         return {...item,amount:cartItem.amount-1}
        }
        else {
          return item
        }
      })
      setCart(newCart)
      localStorage.setItem('Cart',JSON.stringify(newCart))
    }
    if (cartItem.amount === 1) {
      removeFromCart(id)
    }
    
  }

  const increaseAmount = (id) => {
    const item = cart.find(item => {
      return item.id === id
    })
    addToCart(id,item)
  }



  useEffect(() => {
  

    function hello() {
      const grand = cart.reduce((accumulator,currentItem) => {
        return accumulator + currentItem.price * currentItem.amount
      },0)
        setTotal(grand.toFixed(2))
    }
    hello()
  })
  
  function deleteCart() {
    // sessionStorage.clear('Cart')
    setCart([])
    localStorage.setItem('Cart',JSON.stringify([]))
 }


  return (
    <CartContext.Provider value={{addToCart,cart,increaseAmount,decreaseAmount,removeFromCart,total,deleteCart}}>{children }</CartContext.Provider>
  )
}

export default CartProvider