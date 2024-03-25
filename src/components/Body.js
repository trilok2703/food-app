import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_URL);
        const results = await data.json();
        console.log(results);
        setListOfRestaurant(results?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(listOfRestaurants.length === 0) {
        return <Shimmer/>;
    }

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
