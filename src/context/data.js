import React, { useState } from 'react'
import { dataProducts } from '../utils/products'

export const DataContext = React.createContext()

const DataProvider = ({children}) => {
  const [data,setData] = useState(dataProducts)
  return (
    <DataContext.Provider value={[data, setData]}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;