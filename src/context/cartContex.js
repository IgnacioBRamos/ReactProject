import { createContext, useContext, useState } from "react"


const CartContext= createContext()


const useCart =()=>{
    return useContext(CartContext)
}



const CartContextProvider = ({children})=>{

    const [cart, setCart] = useState([])

    const addToCart = (product)=>{
        if (cart.length === 0){
            setCart([{
                ...product,
                cantidad:1  
                }
            ])
        }else{
            const findProducts = cart.find(item=>item.id === product.id)
            if (!findProducts){
                setCart([
                        ...cart,
                        {
                            ...product,
                            cantidad: 1
                        }
                    
                ])
            }else{
                const filteredProducts = cart.filter(item=>item.id !== product.id)
                setCart([
                    ...filteredProducts,
                    {
                        ...findProducts,
                        cantidad:  findProducts.cantidad + 1
                    }
                ])
            }
        }

    }

    const totalProductsCart =()=>{
        return cart.reduce((acc,product) =>acc + product.cantidad,0)
    }

    const totalPriceCart= ()=>{
        return cart.reduce((acc,product) =>acc + product.cantidad * product.price,0)
    }






    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            totalProductsCart,
            totalPriceCart
        }}>
            {children}
        </CartContext.Provider>
    )

}

export {CartContextProvider,useCart}