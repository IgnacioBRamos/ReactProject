import React, { useEffect, useState } from 'react'

import {collection,getDocs,getFirestore} from "firebase/firestore";
import ItemLists from './ItemLists';
import { useParams } from 'react-router-dom';

const ItemListContainers = () => {


    const [items,setItems]= useState()


    const{idCategory} = useParams()

    useEffect(()=>{
        getItems()
    },[idCategory])

    


    

    const getItems =()=>{
        const db = getFirestore()
        const itemsCollection = collection(db,"itemcollection")
        
        getDocs(itemsCollection).then((snapshot)=>{
            if(idCategory === undefined){
                setItems(snapshot.docs.map((doc)=>({id:doc.id,...doc.data()})))   
            }else{ 
                const item = snapshot.docs.map((doc)=>({id:doc.id,...doc.data()}))           
                const itemsuelto = item.filter(p=> p.category == idCategory)
                setItems(itemsuelto)
            }

   
            

        })
    }




  return (
    <div className='flex flex-row flex-wrap'>
        { items &&
            items.map(i =><ItemLists key={i.id} {...i}/>)
        }
    </div>
  )
}

export default ItemListContainers