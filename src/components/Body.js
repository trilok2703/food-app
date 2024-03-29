import { useState } from "react";

import {Link} from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const onlineStatus = useOnlineStatus();
    const {filteredRestaurants,
      filterAvgRating,
      filterSearchResults} = useRestaurantList();
    
    const [searchText,setSearchText] = useState("");

    if(onlineStatus === false) return <h2>You are offline.. check your Internet conection</h2>

    if(filteredRestaurants.length === 0) {
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
            onClick={()=>filterSearchResults(searchText)}
          >
            Search
          </button>
          {/* Filter button for top rated restaurant */}
          <button 
              className="filter-btn"
              onClick={filterAvgRating}
          >
              Top Rated Restaurants
          </button>
        </div>
        <div className="res-container">
          {/* Restaurant card */}
          {filteredRestaurants.map((restaurant) => (
            <Link 
              to={`/restaurants/${restaurant.info.id}`}
              key={restaurant.info.id}
            >
              <RestaurantCard  resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    );
};

export default Body;
