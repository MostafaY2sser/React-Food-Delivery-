import "./ExplorMenu.css"
import {menu_list} from '../../data/assets'


// eslint-disable-next-line react/prop-types
const ExplorMenu = ( {setCategry , categry} ) => {
    return (
        <div className="explor"  id="menu">
            <h1>Explor Our Menu</h1>
            <p className="explorText">provides essential nutrients for overall health Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, mollitia!</p>
            <div className="explorList">
                {menu_list.map((item , index)=>{
                    return(
                        <div  onClick={()=> setCategry((prev)=> prev === item.menu_name? "all" : item.menu_name)} key={index} className="explorItem">
                            <img  className={categry === item.menu_name ? "active" : ""}  src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExplorMenu
