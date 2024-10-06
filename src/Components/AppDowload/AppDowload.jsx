import "./AppDowload.css"
import { assets } from './../../data/assets';


const AppDowload = () => {
    return (
        <div className="appDownlosd"   id="mobile-app">
            <p>For Better Experence <br/> Tomato App</p>
            <div className="appDownloadPlatform">
                <img src={assets.app_store} alt="" />
                <img src={assets.play_store} alt="" />
            </div>
        </div>
    )
}

export default AppDowload
