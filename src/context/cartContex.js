import { createContext, useContext, useState } from "react"


const CartContext= createContext()


const useCart =()=>{
    return useContext(CartContext)
}



const CartContextProvider = ({children})=>{

    const [cart, setCart] = useState([])

    const addToCart = (product,quantity)=>{
        if (cart.length === 0){
            setCart([{
                ...product,
                cantidad: quantity  
                }
            ])
        }else{
            const findProducts = cart.find(item=>item.id === product.id)
            if (!findProducts){
                setCart([
                        ...cart,
                        {
                            ...product,
                            cantidad: quantity
                        }
                    
                ])
            }else{
                const filteredProducts = cart.filter(item=>item.id !== product.id)
                setCart([
                    ...filteredProducts,
                    {
                        ...findProducts,
                        cantidad:  findProducts.cantidad + quantity
                    }
                ])
            }
        }

    }


    const cleanCart = ()=> setCart([])  //vaciar carrito    

    const totalProductsCart =()=>{
        return cart.reduce((acc,product) =>acc + product.cantidad,0)
    }

    const totalPriceCart= ()=>{
        return cart.reduce((acc,product) =>acc + product.cantidad * product.price,0)
    }


    const removeProduct=(id)=> setCart(cart.filter(product=>product.id !== id))



    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            totalProductsCart,
            totalPriceCart,
            removeProduct,
            cleanCart
        }}>
            {children}
        </CartContext.Provider>
    )

}

export {CartContextProvider,useCart}