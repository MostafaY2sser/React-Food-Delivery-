import { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import FootItem from "../FootItem/FootItem";

// eslint-disable-next-line react/prop-types
const FoodDisplay = ({ categry }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div>
      <div className="FoodDisplay">
        <h2>Top Dishes Near You</h2>
        <div className="foodDisplayList">
          {food_list.map((item, index) => {
            if (categry === "all" || categry === item.category) {
              return (
                <FootItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default FoodDisplay;
