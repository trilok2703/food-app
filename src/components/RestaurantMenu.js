import { useState } from "react";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const [showIndex,setShowIndex] = useState(null);
    const {resId} = useParams();

    const resMenu = useRestaurantMenu(resId);

    if(resMenu === null) {
        return (<p>Loading..</p>)
    }

    const {
        name,
        totalRatingsString,
        avgRatingString,
        costForTwoMessage,
        cuisines
        } = resMenu?.data?.cards[2]?.card?.card?.info;

    const itemCategories =
      resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

    return (
      <div className="w-6/12 mx-auto">
        {/* Restaurant details */}
        <div className="flex flex-col mb-6">
          <h2 className="font-bold text-lg my-4">{name}</h2>
          <div className="flex font-semibold">
            <p className="text-sm pr-1">⭐</p>
            <p className="pr-4">
              {avgRatingString} ({totalRatingsString})
            </p>
            <p className="pr-4">•</p>
            <p>{costForTwoMessage}</p>
          </div>
          <p className="text-orange-600">{cuisines.join(", ")}</p>
        </div>
        {/* Restaurant categories */}
        {itemCategories.length &&
          itemCategories.map((itemCategory,index) => (
            <RestaurantCategory
              key={itemCategory.card.card.title}
              data={itemCategory.card.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={()=>{
                setShowIndex(index !== showIndex ? index : null);
              }}
            />
          ))}
      </div>
    );
}

export default RestaurantMenu;