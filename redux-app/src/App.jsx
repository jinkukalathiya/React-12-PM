import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, clearCart } from './features/cart/cartSlice'
import './App.css'

function App() {
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      name: 'TV',
      price: 71000
    },
    {
      id: 2,
      name: 'Laptop',
      price: 89999
    },
    {
      id: 3,
      name: 'Headphone',
      price: 5000
    }
  ]

  return (
    <>
      <div>
        <h2>Products</h2>
        <table border={1} cellPadding={10} cellSpacing={0}>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
          {
            products.map(p => (
              <>
                <tr>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  <td>
                    <button onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
                  </td>
                </tr>
              </>
            ))
          }
        </table>
        
      </div>

      <div>
        <h2>Your Cart</h2>
        <table border={1} cellPadding={10} cellSpacing={0}>
          <tr>
            <th>Product Name</th>
            <th>Product Price</th>
          </tr>
          {
            cartItems.map((item,index) => (
              <>
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                </tr>
              </>
            ))
          }
        </table>
        <h3>Total Amount : {total}</h3>

        <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      </div>
    </>
  )
}

export default App
