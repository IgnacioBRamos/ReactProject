import React, { useContext } from 'react'
import { useCart } from '../context/cartContex'

const Cart = () => {

  const { cart,totalProductsCart,totalPriceCart } = useCart()


  console.log(cart)
  return (




    <div className="container mx-auto py-10">
      <table className="table w-full">

        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Units</th>
            <th>Precio total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item =>
            <tr>
              <th><img src={item.img} alt="Movie" className='w-20' /></th>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.cantidad}</td>
              <td>${item.cantidad*item.price}</td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>Total Carrito</th>
            <th>${totalPriceCart()}</th>
          </tr>
        </tfoot>
      </table>

    </div>
  )
}

export default Cart