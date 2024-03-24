import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

import resList from "../utils/mockData";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState(resList);

    return (
      <div className="body">
        <button 
            className="filter-btn"
            onClick={()=>{
                const filteredResults = listOfRestaurants.filter(
                  (restaurant) => restaurant.info.avgRating > 4.1
                );
                setListOfRestaurant(filteredResults);
            }}
        >
            Top Rated Restaurants
        </button>
        <div className="res-container">
          {/* Restaurant card */}
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
};

export default Body;
