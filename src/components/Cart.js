import React, {useState } from 'react'
import { useCart } from '../context/cartContex'
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { Link } from 'react-router-dom';

const Cart = () => {

  const { cart, totalPriceCart, removeProduct, cleanCart } = useCart()

  const [orderNumber, setOrderNumber] = useState()
  const order = {
    buyer: {
      name: "Ignacio",
      email: "Nacho@hotmail.com",
      phone: '123123',
      address: "Midtown"
    },
    items: cart.map(product => ({ id: product.id, name: product.name, price: product.price, quantity: product.cantidad })),
    total: totalPriceCart(),
  }

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
      .then(({ id }) => setOrderNumber(id))
  }




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
      
      <label htmlFor="my-modal" className="btn my-5 btn btn-outline btn-success" onClick={handleClick}>Emitir Compra</label>

      
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Todo Listo!!</h3>
          <p className="py-4">Gracias por realizar su compra.<br/>Su orden: {orderNumber} ha sido registrada con exito</p>
          <div className="modal-action">
            <Link to='/'><label htmlFor="my-modal" className="btn">Volver a Inicio</label></Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart