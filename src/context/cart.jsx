import React, { useState } from 'react'

export const CartContext = React.createContext()

const CartProvider = ({children}) => {
  const [selectedGoods, setSelectedGoods] = useState([])
  return (
    <CartContext.Provider value={[selectedGoods, setSelectedGoods]}>
      {children}
    </CartContext.Provider>
  );
}
export default CartProvider