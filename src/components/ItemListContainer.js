import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PRODUCTS } from "../data/Clothes"
import ItemList from "./ItemList"


const ItemListContainer = () => {


  const [item, setItem] = useState([])

  const {idCategory}= useParams()



  useEffect(()=>{


    if(idCategory){

      getItems().then((response)=>{setItem(response.filter(product=>product.category === idCategory))})
    }else{
      getItems().then((response)=>{      
        setItem(response)
      })
    }


    



  },[idCategory])


  const getItems=()=>{
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(PRODUCTS)
      },2000)
    })
  }

  



  return (
    <div>
      {item.map(i=> <ItemList key={item.id}{...i}/>)}
    </div>
  )
}

export default ItemListContainer