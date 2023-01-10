import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ( { id, name, price, stock,img } ) => {
    return (
        <div className='py-4'>
            <div className="card card-side bg-base-100 shadow-xl w-2/5 mx-auto mt-20">
                <figure><img src={img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className='text-2xl font-medium'>{name}</h2>
                    {/* <p className='mt-20'>{detail}</p> */}
                    <span className='text-xl font-medium'>${price}</span>
                    <ItemCount stock={stock} />
                    {/* <button onClick={handleAddToCart}>Agregar carrito</button> */}
                    <p>Stock Disponible: {stock}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail