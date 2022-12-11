

const ItemList = ({name,price,stock}) => {
  return (
    <div>
        <li>{name}-{price}-{stock}</li>
    </div>
  )
}

export default ItemList