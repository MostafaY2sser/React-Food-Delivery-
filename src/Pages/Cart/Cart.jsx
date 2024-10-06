import { assets } from "../../data/assets"
import "./Cart.css"

const Cart = () => {
    return (
        <div className="cart">
            <div className="cartItemTitle">
                <p>Item</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Remove</p>
            </div>
            <div className="cartItem">
                <img src={assets.logout_icon} alt="" className="item" />
                <p className="tit">Mostaf</p>
                <p className="price">$12</p>
                <p className="quantity">2</p>
                <p className="total">$26</p>
                <img src={assets.cross_icon} alt="" className="remove" />
            </div>
            <div className="cartInfo">
                <div className="cartTotal">
                    <div className="subTotal">
                        <p>Subtotal</p>
                        <span>$20</span>
                    </div>
                    <div className="delviry">
                        <p>Delivery Free</p>
                        <span>$4</span>
                    </div>
                    <div className="lastTotal">
                        <p>Total</p>
                        <span>$100</span>
                    </div>
                </div>
                <div className="promoCode">
                    <p>if you have promo code, Enter it here</p>
                    <div className="promoCodeInput">
                        <input type="text" placeholder="Promo Code" />
                        <button>Submet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
