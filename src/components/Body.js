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
        <div className="filter flex align-middle">
          <div className="search my-4 mx-0 p-4">
            <input
                className="border border-solid border-black"
                type="text" 
                value={searchText}
                onChange={(e)=>{
                  setSearchText(e.target.value);
                }}
            />
            {/* Search button for searching restaurants with search text */}
            <button
              className="px-4 py-1 bg-green-100 m-4 rounded-lg"
              onClick={()=>filterSearchResults(searchText)}
            >
              Search
            </button>
          </div>
          <div className="my-4 mx-0-2 p-4">
            {/* Filter button for top rated restaurant */}
            <button 
                className="px-4 py-1 bg-gray-100 m-4 rounded-lg"
                onClick={filterAvgRating}
            >
                Top Rated Restaurants
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-stretch">
          {/* Restaurant card */}
          {filteredRestaurants.map((restaurant) => (
            <Link
              className="m-4"
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
