import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {MENU_URL} from '../utils/constants';
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    
    const {resId} = useParams();

    const resMenu = useRestaurantMenu(resId);

    if(resMenu === null) {
        return (<p>Loading..</p>)
    }

    const {
        name,
        costForTwoMessage,
        cuisines
        } = resMenu?.data?.cards[2]?.card?.card?.info;

    return (
        <div>
            <h2>Restaurant Menu</h2>
            <h2>Name: {name}</h2>
            <p>{costForTwoMessage}</p>
            <p>{cuisines.join(", ")}</p>
            <ul>
                <li>Dosa</li>
                <li>Idli</li>
                <li>Vada</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;