import React from 'react'
import { Link } from 'react-router-dom'

const ItemLists = ({ id, name, price, stock,img}) => {
  return (
    <div className='mx-auto'>
        <div className="card card-compact w-96 bg-base-200 shadow-xl m-20">     
          <img className=' p-5' src= {img} alt="Movie" />
          <div className="card-body">   
            <h2 className="text-2xl">{name}</h2>
            <p className="text-xl">${price}</p>
            

            
            <Link to={`/items/${id}`} className="btn">Detalle</Link>
            <div className="divider"></div> 
            <h6>Stock Disponible: {stock}</h6>
          </div>
        </div>
      
    </div>
  )
}

export default ItemLists