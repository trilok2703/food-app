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
    console.log(props);

    const {resData} = props;
    return (
        <div 
            className='res-card'
            style={styleCard}
        >  
            <img
                className='res-logo'
                alt="res-logo"
                src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+resData.info.cloudinaryImageId}
            />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.avgRating} stars</h4>
            <h4>{resData.info.sla.slaString}</h4>
        </div>
    )
};

const resObj = {
    "info": {
      "id": "608746",
      "name": "Pavithra Veg",
      "cloudinaryImageId": "axwt4fq9wwvfzulql7vu",
      "locality": "V V Nagar",
      "areaName": "Guntakal Rtc",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "South Indian",
        "Tandoor",
        "Chinese"
      ],
      "avgRating": 4.1,
      "veg": true,
      "parentId": "156624",
      "avgRatingString": "4.1",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 0.4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "0.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-24 11:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-9cdc4211-f179-454c-ae42-7b2843b56cf4"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pavithra-veg-v-v-nagar-guntakal-rtc-guntakal-608746",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  };

// Body
const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                {/* Restaurant card */}
                <RestaurantCard 
                    resData={resObj}
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
};



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