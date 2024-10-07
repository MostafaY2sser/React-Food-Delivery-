import { useContext } from "react"
import "./PlaceOrder.css"
import { StoreContext } from "../../Context/StoreContext"

const PlaceOrder = () => {


    const { getTotalPrice }  = useContext(StoreContext)


    return (
        <div className="order">

            <div className="orderLeft">
                <h2 className="orderTitle">Delivery Information</h2>
                <div className="multiInput">
                    <input type="text"  placeholder="First Name"/>
                    <input type="text"  placeholder="Last Name"/>
                </div>
                <input type="email" placeholder="Email Address" />
                <input type="text" placeholder="Street" />
                <div className="multiInput">
                    <input type="text"  placeholder="City"/>
                    <input type="text"  placeholder="State"/>
                </div>
                <div className="multiInput">
                    <input type="text"  placeholder="Zip Code"/>
                    <input type="text"  placeholder="country"/>
                </div>
                <input type="number" placeholder="Phone"/>
            </div>
            
            <div className="orderRight">
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
                        <button>PROCEED TO PAYMENT</button>
                </div>
            </div>

        </div>
    )
}

export default PlaceOrder
