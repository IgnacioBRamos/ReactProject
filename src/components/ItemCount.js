import { useState } from "react"


const ItemCount = ({stock}) => {

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
    <div>
        <button onClick={clickPlus} className='btn'>+</button>
        <strong className="mx-4">{count}</strong>
        <button onClick={clickMinus} className='btn'>-</button>
    </div>
  )
}

export default ItemCount