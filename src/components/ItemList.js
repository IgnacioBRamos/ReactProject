import { Link } from "react-router-dom"

const ItemList = ({ id, name, price, stock,img }) => {
  return (
    <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl m-20">
          <figure><img src= {img} alt="" /></figure>
          <div className="card-body">   
            <h2 className="text-2xl">{name}</h2>
            <p className="text-xl">${price}</p>
            
            <Link to={`/item/${id}`} className="btn">Detalle</Link>
            <h6>Stock Disponible: {stock}</h6>
          </div>
        </div>
      
    </div>
  )
}

export default ItemList