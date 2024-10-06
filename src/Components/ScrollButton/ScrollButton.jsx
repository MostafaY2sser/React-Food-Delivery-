import { useEffect, useState } from "react";
import "./ScrollButton.css"


const ScrollButton = () => {

    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); 
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    };
    
    return (
        <div  className={`container  ${visible === true ? "showbutton" : ""}`}  >
            <button onClick={scrollToTop}>^</button>
        </div>
    )
}

export default ScrollButton
