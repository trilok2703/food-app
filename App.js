import React from 'react';
import ReactDOM from 'react-dom/client';

// Header component
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://i.pinimg.com/originals/3c/b2/4f/3cb24f7d0defcb91eb51b091325d5f47.jpg"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
};

const styleCard = {
    backgroundColor: "#f0f0f0"
}

// Restaurant card
const RestaurantCard = (props) =>{
    console.log(props)
    return (
        <div 
            className='res-card'
            style={styleCard}
        >  
            <img
                className='res-logo'
                alt="res-logo"
                src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bfcea2108aea7a98f2b370b78b2fdac0'
            />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.resRating} stars</h4>
            <h4>{props.deliveryTime}</h4>
        </div>
    )
}

// Body
const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                {/* Restaurant card */}
                <RestaurantCard 
                    resName="Meghana Foods"
                    cuisine="Biryani, North Indian, Asian"
                    resRating="4.4"
                    deliveryTime="35 minutes"
                />
                <RestaurantCard
                    resName="KFC"
                    cuisine="Burger"
                    resRating="4"
                    deliveryTime="20 minutes"
                />
            </div>
        </div>
    )
}

// Footer
const Footer = () => {
    return (
        <div className='footer'>
            <p>@copyright</p>
        </div>
    )
}

const AppLayout = () =>{
    return (
        <div className='app'>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)