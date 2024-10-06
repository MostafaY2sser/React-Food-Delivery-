import { useContext } from "react"
import { assets } from "../../data/assets"
import "./FoodItem.css"
import { StoreContext } from "../../Context/StoreContext"


// eslint-disable-next-line react/prop-types
const FootItem = ({ id ,name , image , price , description }) => {


    const {cartItem , addToCart , remoneFromCart} = useContext(StoreContext)


    return (
        <div  className="foodItem">
            <div className="foodItemImageContainer">
                <img src={image} alt="" className="footItemImage" />
                { !cartItem[id] 
                    ? <img className="add"  onClick={()=> addToCart(id)}  src={assets.add_icon_white} alt="" />
                    : <div className="foodItemCounter">
                        <img onClick={()=> remoneFromCart(id)}  src={assets.remove_icon_red} alt="" />
                        <p>{cartItem[id]}</p>
                        <img onClick={()=> addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
                }
            </div>


            <div className="foodItemInfo">
                <div className="footItemNameAndRating">
                    <p className="footItemName">{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="foosItenDescription">{description}</p>
                <p  className="footItemPrice">${price}</p>
            </div>
        </div>
    )
}

export default FootItem
