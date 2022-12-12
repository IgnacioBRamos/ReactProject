import { Link } from "react-router-dom"


const ItemList = ({ id, name, price, stock }) => {
  return (
    <div className=" flex flex-row">
      
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{price}</p>
            
            <Link to={`/item/${id}`} className="btn">Detalle</Link>
            <h6>Stock Disponible: {stock}</h6>
          </div>
        </div>
      
    </div>
  )
}

export default ItemList