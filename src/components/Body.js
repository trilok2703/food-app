import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_URL);
        const results = await data.json();
        // console.log(results);
        setListOfRestaurant(results?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(results?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(listOfRestaurants.length === 0) {
        return <Shimmer/>;
    }

    // console.log(listOfRestaurants)

    return (
      <div className="body">
        <div className="filter">
          <input 
            type="text" 
            value={searchText}
            onChange={(e)=>{
              setSearchText(e.target.value);
            }}
          />
          {/* Search button for searching restaurants with search text */}
          <button
            onClick={()=>{
             const filteredResults = listOfRestaurants.filter((res)=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
             setFilteredRestaurants(filteredResults);
            }}
          >
            Search
          </button>
          {/* Filter button for top rated restaurant */}
          <button 
              className="filter-btn"
              onClick={()=>{
                  const filteredResults = listOfRestaurants.filter(
                    (restaurant) => restaurant.info.avgRating > 4.4
                  );
                  setFilteredRestaurants(filteredResults);
              }}
          >
              Top Rated Restaurants
          </button>
        </div>
        <div className="res-container">
          {/* Restaurant card */}
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
};

export default Body;
