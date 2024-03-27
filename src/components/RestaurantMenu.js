import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {MENU_URL} from '../utils/constants';

const RestaurantMenu = () => {
    const [resMenu, setResMenu] = useState(null);
    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const menuData = await fetch(MENU_URL+resId);
        const menuRes = await menuData.json();
        setResMenu(menuRes);
    }

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