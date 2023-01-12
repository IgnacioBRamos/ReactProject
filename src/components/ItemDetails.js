import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/cartContex'
import ItemCount from './ItemCount'

const ItemDetails = ({ items }) => {

    const { addToCart } = useCart()

    const [boton, setBoton] = useState(true)

    const handleAddToCart = (quantity) => {
        addToCart(items, quantity)
        setBoton(false)
    }


    return (
        <div className='py-4'>
            <div className="card card-side bg-base-200 shadow-xl w-2/5 mx-auto mt-20">
                <img src={items.img} alt="Movie" className='p-5'/>
                <div className="card-body">
                    <h2 className='text-2xl font-medium'>{items.name}</h2>
                    <p className='mt-20'>{items.detail}</p>
                    <span className='text-xl font-medium'>${items.price}</span>


                    {boton === true ?
                        <ItemCount stock={items.stock} handleAddToCart={handleAddToCart} />
                        :
                        <Link to='/cart' className='btn my-3'>Terminar compra</Link>
                    }

                    <p>Stock Disponible: {items.stock}</p>

                </div>
            </div>
        </div>
    )
}

export default ItemDetails