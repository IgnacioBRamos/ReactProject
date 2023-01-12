import { useState } from "react"


const ItemCount = ({stock,handleAddToCart}) => {

    const [count, setCount] = useState(0)

    
    const clickPlus = () =>{
        
        if (count < stock){
            setCount(count => count + 1)
        }
    }


    const clickMinus = ()=>{       
        if (count >= 1){
            setCount(count=> count - 1)
        }       
    }

    

  return (
    <div className="">
        <button onClick={clickPlus} className='btn btn-xs'>+</button>
        <strong className="mx-3">{count}</strong>
        <button onClick={clickMinus} className='btn btn-xs'>-</button>
        <button disabled={ count === 0 || stock <=0 } onClick={()=>handleAddToCart(count)} className='btn m-5' >Agregar a carrito</button>
    </div>
  )
}

export default ItemCount