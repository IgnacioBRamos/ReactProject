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
            }, 1000)
        })
    }
    return (
        <div className='py-4'>
            <div className="card card-side bg-base-100 shadow-xl w-2/5 mx-auto mt-20">
                <figure><img src={item.img} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className='text-2xl font-medium'>{item.name}</h2>
                    <p className='mt-20'>{item.detail}</p>
                    <span className='text-xl font-medium'>${item.price}</span>
                    <ItemCount stock={item.stock}/>
                    <p>Stock Disponible: {item.stock}</p>
                </div>
            </div>  
        </div>
    )
}

export default ItemDetailContainer