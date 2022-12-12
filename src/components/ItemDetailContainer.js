import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../data/Clothes'
import ItemCount from './ItemCount'


const ItemDetailContainer = () => {

    const [item, setItem] = useState({})

    const { id } = useParams()



    useEffect(() => {
        getItemDetail().then(res => {
            setItem(res)
        })
    }, [id])


    const getItemDetail = () => {
        return new Promise((resolve) => {
            const item = PRODUCTS.find(p => p.id == id)
            setTimeout(() => {
                resolve(item)
            }, 2000)
        })
    }
    return (
        <div className='py-4'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 >{item.name}</h2>
                    <p>{item.price}</p>
                    {item.stock}
                    <ItemCount stock={item.stock}/>
                </div>
            </div>  
        </div>
    )
}

export default ItemDetailContainer