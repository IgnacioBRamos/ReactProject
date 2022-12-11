import { useEffect, useState } from "react"
import ItemList from "./ItemList"


const ItemListContainer = ({greeting}) => {


  const [item, setItem] = useState([])

  const PRODUCTS= [
    {name: "Buzo",price: 25,stock:20},
    {name:"Buzo largo", price: 30,stock:10},
    {name:"Hoodie",price:30,stock:15}
  ]



  useEffect(()=>{
    getItems().then((response)=>{
      console.log(response)
      setItem(response)
    })
  },[])


  const getItems=()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(PRODUCTS)
      },2000)
    })
  }


  



  return (
    <div className="text-4xl mt-6 font-mono">
      {item.map(i=> <ItemList {...i}/>)}
    </div>
  )
}

export default ItemListContainer