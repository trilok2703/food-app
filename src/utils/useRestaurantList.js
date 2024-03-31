import { useState, useEffect } from "react";
import { RESTAURANT_URL } from "../utils/constants";

const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // Fetching the restaurants list
  const fetchData = async () => {
    const data = await fetch(RESTAURANT_URL);
    const results = await data.json();
    
    setListOfRestaurant(
      results?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(
      results?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // Filter the restaurants list based on avg rating.
  const filterAvgRating = () => {
    const filteredResults = listOfRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4.4
    );
    setFilteredRestaurants(filteredResults);
  };

  // Filter search results based on search text.
  const filterSearchResults = (searchText) => {
    const filteredResults = listOfRestaurants.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredResults);
  };

  return {
    filteredRestaurants,
    filterAvgRating,
    filterSearchResults
  };
};

export default useRestaurantList;
