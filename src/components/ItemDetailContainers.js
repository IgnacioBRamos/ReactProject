import React, { useEffect, useState } from 'react'
import ItemDetails from './ItemDetails'
import {collection,getDocs,getFirestore} from "firebase/firestore";
import { useParams } from 'react-router-dom';

const ItemDetailContainers = () => {

    const [items,setItems]= useState()
    const { id } = useParams()




    useEffect(()=>{
        getItems()
    },[])


    const getItems =()=>{
        const db = getFirestore()
        const itemsCollection = collection(db,"itemcollection")
        getDocs(itemsCollection).then((snapshot)=>{

            const item = snapshot.docs.map((doc)=>({id:doc.id,...doc.data()}))
            
            const itemsuelto = item.find(p=> p.id == id)
            setItems(itemsuelto)
        })
    }


  return (
    <div>
        { items && <ItemDetails items={items}/>}
    </div>
  )
}

export default ItemDetailContainers