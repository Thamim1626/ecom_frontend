import React from 'react'

const CartItemContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  delCartItem: () => {},
})

export default CartItemContext
