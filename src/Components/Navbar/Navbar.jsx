import "./Navbar.css"
import { assets } from '../../data/assets';
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

// eslint-disable-next-line react/prop-types
const Navbar = ( {setshowPopup , showPopup} ) => {

    // For change Active Class :---------------
    const [ menu , setMenu ] = useState("home")

    // Handel the navbar Responssive :----------
    const [ close , setClose ] = useState(false)

    // For go to Home Page :-------
    const navigatehHome = useNavigate()

    const { getTotalPrice } = useContext(StoreContext)

    return (
        <div  className="navbar">
            <Link to={"/"}> <img src={assets.logo} alt="" className="logo" /></Link>
            <ul className={`navbar-links ${close ? "Visible" : ""}`}>
                <li onClick={()=> setClose(!close)}  className="close">
                    <span></span>
                    <span></span>
                </li>
                <li 
                    onClick={()=>{ setMenu("home") ; navigatehHome("/homePage") }} 
                    className={ menu ==="home" ? "active" : ""}>
                    <a href="#">Home</a>
                </li>
                <li 
                    onClick={()=> setMenu("menu") } 
                    className={ menu ==="menu" ? "active" : ""}>
                    <a href="#menu">Menu</a>
                </li>
                <li 
                    onClick={()=> setMenu("mobile-app") } 
                    className={ menu ==="mobile-app" ? "active" : ""}>
                    <a href="#mobile-app">Mobile App</a>
                </li>
                <li 
                    onClick={()=> setMenu("contact-us") } 
                    className={ menu ==="contact-us" ? "active" : ""}>
                    <a href="#footer">Contact Us</a>
                    </li>
            </ul>
            <div className="navbar-right">
                <img className="search" src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <Link to={"/cart"}><img  className="cartImg" src={assets.basket_icon} alt="" /></Link>
                    <span className={getTotalPrice()=== 0 ? "" : "dot"}></span>
                </div>
                <button  onClick={()=> setshowPopup(!showPopup)} className="sign-in">sign in</button>
                <div  onClick={()=> setClose(!close)} className="bar">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
