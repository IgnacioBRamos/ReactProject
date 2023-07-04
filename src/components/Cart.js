import React from 'react'
import { useCart } from '../context/cartContex'
import { Link } from 'react-router-dom';

const Cart = () => {

  const { cart, totalPriceCart, removeProduct, cleanCart } = useCart()


  if (cart.length === 0) {
    return (
      <div>

        <Link to='/'><button className='float-left mx-5'> Volver a Home</button></Link>

        <h1 className='mt-20 text-lg'>No hay productos en el carrito</h1>
      </div>
    )
  }


  return (
    <div className="container mx-auto py-10">
      <table className="table w-full">

        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Unidades</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>

          {cart.map(item =>

            <tr>
              <th className='btn my-10 btn-error btn-outline' onClick={() => { removeProduct(item.id) }}>X</th>
              <th><img src={item.img} alt="Movie" className='w-20' /></th>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.cantidad}</td>
              <td>${item.cantidad * item.price}</td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>Total</th>
            <th className='text-base'>${totalPriceCart()}</th>
          </tr>

        </tfoot>
      </table>
      <button onClick={cleanCart} className='btn m-5 btn-error btn-outline'>Vaciar Carrito</button>
      <Link to="/form" className="btn my-5 btn btn-outline btn-success">Ir a finalizar compra</Link>
    </div>
  )
}

export default Cart