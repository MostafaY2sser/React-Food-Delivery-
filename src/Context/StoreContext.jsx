import { createContext, useEffect, useState } from "react";
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

    const remoneFromCart = (itemId) => {
        setCartItem( (prve) => ({...prve , [itemId]: prve[itemId] - 1 }))
    }



    const ContextValue ={
        food_list ,
        cartItem ,
        setCartItem , 
        addToCart , 
        remoneFromCart 
    }


    return (
        <StoreContext.Provider   value={ ContextValue }>
            {/* eslint-disable-next-line react/prop-types */}
            {props.children}
        </StoreContext.Provider>
    )


} 


export default StoreContextProvider