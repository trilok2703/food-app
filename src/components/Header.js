import { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux';

import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const data = useContext(UserContext);

    // Subscribing to the store using a selector
    const cartItem = useSelector((store)=>store.cart.items);
    // console.log(cartItem);
    // console.log(data);

    return (
        <div className="flex justify-between bg-yellow-400 shadow-lg align-middle mb-4">
            <div className="logo-container">
                <img
                    className="w-32"
                    src={LOGO_URL}
                />
            </div>
            <div className="">
                <ul className="flex p-4 m-4">
                    <li className="px-2">Online status:{onlineStatus ? "✔" : "🔴"}</li>
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About</Link></li>
                    <li className="px-2"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-2"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-2 font-bold"><Link to="/cart">Cart ({cartItem.length} items)</Link></li>
                    <li className="px-2">{data.loggedInUser}</li>
                    <button 
                        className="login-btn"
                        onClick={()=>{
                            btnName === "Login"
                              ? setBtnName("Logout")
                              : setBtnName("Login");
                        }}
                    >
                        {btnName}
                    </button>
                </ul>
            </div>

        </div>
    )
};

export default Header;