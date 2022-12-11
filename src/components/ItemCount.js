import { useState } from "react"


const ItemCount = () => {

    const [count, setCount] = useState(0)


    const clickMinus = ()=>{
        console.log("se hizo click minus")
        if (count >= 1){
            setCount(count - 1)
        }       
    }

    const clickPlus = () =>{
        console.log("se hizo click plus")
        
        setCount(count + 1)
    }


  return (
    <div>
        <button onClick={clickPlus} className='btn'>+</button>
        <strong>{count}</strong>
        <button onClick={clickMinus} className='btn'>-</button>
    </div>
  )
}

export default ItemCount