
import "./Home.css"
import ExplorMenu from "../../Components/ExplorMenu/ExplorMenu"
import Header from "../../Components/Header/Header"
import { useState } from "react"
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay"
import AppDowload from "../../Components/AppDowload/AppDowload"

const Home = () => {

    const [ categry , setCategry ] = useState("all")


    return (
        <div>
            <Header/>
            <ExplorMenu   categry={categry}  setCategry={setCategry}/>
            <FoodDisplay  categry={categry}/>
            <AppDowload/>
        </div>
    )
}

export default Home
