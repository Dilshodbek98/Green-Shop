import React from 'react'
import CartProvider from './cart'
import DataProvider from "./data";

const RootContext = ({children}) => {
  return (
    <DataProvider>
      <CartProvider>{children}</CartProvider>
    </DataProvider>
  );
}

export default RootContext