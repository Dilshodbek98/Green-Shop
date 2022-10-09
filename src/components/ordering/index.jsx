import React, { useEffect } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/cart'
import { dataProducts } from '../../utils/products'
import { Container } from '../GlobaleContainer/container'
import SmallCarousel from '../SmallCarousel'
import { Icon, Main } from './style'

const Ordering = () => {
  const [selectedGoods, setSelectedGoods] = useContext(CartContext)
    useEffect(() => {
      let res = dataProducts.filter((value) => value.count >= 1);
    }, [selectedGoods]);
      const deleteItem = (id) => {
        dataProducts[id].count = 0
        let res = selectedGoods.filter((vl) => vl.id !== id);
        setSelectedGoods(res);
      };
  return selectedGoods ? (
    <Main>
      <Container>
        <h1>Home / Shop / Ordering </h1>
        <table>
          <thead>
            <tr>
              <th>Products</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {selectedGoods.map((value) => {
              return (
                <tr key={value.id}>
                  <td className="product">
                    <img src={value.img} width={70} height={70} />
                    <h2>{value.title}</h2>
                  </td>
                  <td>
                    <p>${value.price}</p>
                  </td>
                  <td>
                    <p>{value.count}</p>
                  </td>
                  <td>
                    <p>${Number(value.count) * Number(value.price)}</p>
                  </td>
                  <td className="delete">
                    <Icon.Delete onClick={() => deleteItem(value.id)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <SmallCarousel/>
      </Container>
    </Main>
  ) :
  <Main>
    <Container>
      <h1>Your cart is emty</h1>
    </Container>
  </Main>
}

export default Ordering