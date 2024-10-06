
import { useState } from "react"
import "./LoginPopup.css"
import { assets } from "../../data/assets"


// eslint-disable-next-line react/prop-types
const LoginPopup = ( {setshowPopup  } ) => {



    const [ currentstate , setcurrentstate ] = useState("login")



    return (
        <div className="loginPupup">
            <form className="loginPupupContainer">
                <div className="loginPopupTitle">
                    <h2>{currentstate}</h2>
                    <img  onClick={()=> setshowPopup(false)}  src={assets.cross_icon} alt="" />
                </div>
                <div className="loginPopupInputs">
                    {
                        currentstate === "login" 
                        ? <></>
                        :<input type="text" placeholder="Your Name"  required />
                    }
                    <input type="email" placeholder="Email"  required />
                    <input type="password" placeholder="Password"  required />
                </div>
                <button  className="only">{currentstate === "login" ? "Log in" : "Create Account"}</button>
                <div className="loginPopupCondition">
                    <input type="checkbox"  required/>
                    <p>By Continuing, I agree to the trems of use & privacy Policy</p>
                </div>
                {
                    currentstate === "login" 
                    ? <p className="change">Create a new account? <span  onClick={()=> setcurrentstate("Sin Up")} >Click here</span></p>
                    : <p className="change">Already have an account! <span  onClick={()=> setcurrentstate("login")} >Click here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup
