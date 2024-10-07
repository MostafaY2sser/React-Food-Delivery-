import { useContext } from "react"
// import { assets } from "../../data/assets"
import "./Cart.css"
import { StoreContext } from "../../Context/StoreContext"
import { useNavigate } from "react-router-dom"

const Cart = () => {


    const { cartItem , food_list , removeFromCart , getTotalPrice  } = useContext(StoreContext)

    const navigatePlaceOrder = useNavigate()


    return (
        <div className="cart">
            <h1>Shopping Cart</h1>
            <div className="cartItem">
                <div className="cartItemTitle">
                    <p>Item</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quaantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                { food_list.map((item,index)=>{
                    if( cartItem[item._id] > 0 ){
                        return(
                            <div key={index} >
                                <div  className="cartItemTitle cartItemItem">
                                    <img src={item.image} alt="Product Image" />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItem[item._id]}</p>
                                    <p>${item.price * cartItem[item._id]}</p>
                                    <p onClick={()=> removeFromCart(item._id)} className="crosse">X</p>
                                </div>
                                <hr />
                            </div>
                        )
                    }
                })}
            </div>
            <div className="cartBottom">
                <div className="cartTotal">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cartTotalDetails">
                            <p>Subtotal</p>
                            <p>${getTotalPrice()}</p>
                        </div>
                        <hr />
                        <div className="cartTotalDetails">
                            <p>Delivery Free</p>
                            <p>{getTotalPrice() === 0 ? 0 : 2}</p>
                        </div>
                        <hr /> 
                        <div className="cartTotalDetails">
                            <p>Total</p>
                            <p>${getTotalPrice() ===0 ? 0 : getTotalPrice() + 2 }</p>
                        </div>
                    </div>
                    <button  onClick={()=> navigatePlaceOrder("/order")}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartPromoCode">
                    <div>
                        <p>If you have promo code, Enter it here</p>
                        <div className="promoCodeInputs">
                            <input type="text" placeholder="Promo Code" />
                            <button>Submet</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
