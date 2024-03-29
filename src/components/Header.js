import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online status:{onlineStatus ? "✔" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
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