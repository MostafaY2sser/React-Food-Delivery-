
import "./Footer.css"
import { assets } from './../../data/assets';

const Footer = () => {
    return (
        <div className="footer"  id="footer">
            <div className="footerContent">
                <div className="footerLeft">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero itaque quam voluptas, placeat ipsa ex iusto corrupti nobis dolores magnam temporibus harum esse obcaecati, deserunt dolorum. Veritatis molestiae accusamus natus.</p>
                    <div className="footerSocailIcon">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footerCenter">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footerRight">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+20 1221335281</li>
                        <li>tomatom33@gGamil.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footerCopyRight">CopyRitht 2024 &copy; Tomato.com - All Right Reserved</p>
        </div>
    )
}

export default Footer
