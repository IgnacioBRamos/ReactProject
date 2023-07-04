import React, { useState } from 'react'
import { useCart } from '../context/cartContex'
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { Link } from 'react-router-dom';



const FormCart = () => {


  const { cart, totalPriceCart, cleanCart } = useCart()

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [email, setEmail] = useState('');
  const [phone, setTelefono] = useState('');

  const [orderNumber, setOrderNumber] = useState()
  const order = {
    buyer: {
      fullName: `${nombre} ${apellido}`,
      email: email,
      phone: phone,
    },
    items: cart.map(product => ({ id: product.id, name: product.name, price: product.price, quantity: product.cantidad })),
    total: totalPriceCart(),
  }
  const handleClick = async () => {
    try {
      const db = getFirestore();
      const ordersCollection = collection(db, 'orders');
      const docRef = await addDoc(ordersCollection, order);
      const { id } = docRef;
      setOrderNumber(id);
    } catch (error) {
      console.error('Error al agregar el documento:', error);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault()
  }





  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='nombre'>Nombre</label>
        <input type='text' id='nombre' name='nombre' className="m-2" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <br />
        <label htmlFor='apellido'>Apellido</label>
        <input type='text' id='apellido' name='apellido' value={apellido} onChange={(e) => setApellido(e.target.value)} />
        <br />
        <label>Email:<input type="email" value={email} className="m-2" onChange={(event) => setEmail(event.target.value)}/></label>
        <br />
        <label>Teléfono:<input type="tel" value={phone} onChange={(event) => setTelefono(event.target.value)}/></label>
        <br/>
        <label htmlFor="my-modal" className="btn my-5 btn btn-outline btn-success" onClick={handleClick}>Emitir Compra</label>
      </form>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Todo Listo!!</h3>
          <p className="py-4">Gracias por realizar su compra.<br />Su orden: {orderNumber} ha sido registrada con exito</p>
          <div className="modal-action">
            <Link to='/'><label htmlFor="my-modal" className="btn" onClick={cleanCart}>Volver a Inicio</label></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormCart