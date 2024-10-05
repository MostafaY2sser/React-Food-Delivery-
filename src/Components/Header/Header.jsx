

import "./Header.css"
import { assets } from './../../data/assets';

const Header = () => {
    return (
        <div className="header">
            <img src={assets.header_img} alt="" />
            <div className="header-contents">
                <h2>Order Your Favourite Food Here</h2>
                <p>Choose From dicta  invent consectetur adipisicing elitExpeditalaboriosam inventore dicta at ut eius tempora animi, maxime corporis, nisi blanditiis ea. Minima ratione ipsam qui doloribus quod eos?</p>
                <button>Veiw Menu</button>
            </div>
        </div>
    )
}

export default Header
