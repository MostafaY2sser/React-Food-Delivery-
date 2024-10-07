import { createContext , useState } from "react";
import { food_list } from "../data/assets"

export const StoreContext = createContext(null)

const StoreContextProvider = ( props ) => {

    const [ cartItem , setCartItem ] = useState({})

    const addToCart = ( itemId ) => {
        if( !cartItem[itemId] ){
            setCartItem((prve) => ({...prve , [itemId] : 1 }))
        }
        else{
            setCartItem((prve) => ({...prve , [itemId] : prve[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItem( (prve) => ({...prve , [itemId]: prve[itemId] - 1 }))
    }

    const getTotalPrice = ()=>{
        let totalAmount = 0
        for ( const item  in cartItem ){
            if( cartItem[item] > 0 ){
                let  itemInfo = food_list.find((product)=> product._id === item)
                totalAmount += itemInfo.price * cartItem[item]
            }
        }
        return totalAmount
    }

    const ContextValue ={
        food_list ,
        cartItem ,
        setCartItem , 
        addToCart , 
        removeFromCart ,
        getTotalPrice ,
    }

    return (
        <StoreContext.Provider   value={ ContextValue }>
            {/* eslint-disable-next-line react/prop-types */}
            {props.children}
        </StoreContext.Provider>
    )
} 

export default StoreContextProvider