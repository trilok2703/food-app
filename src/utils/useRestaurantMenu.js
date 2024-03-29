import { useEffect, useState } from "react";
import {MENU_URL} from '../utils/constants';


const useRestaurantMenu = (resId) => {
    const [resMenu, setResMenu] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const menuData = await fetch(MENU_URL+resId);
        const menuRes = await menuData.json();
        setResMenu(menuRes);
    }

    return resMenu;
};

export default useRestaurantMenu;