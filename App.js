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
    // console.log(props);

    const {resData} = props;
    const { 
        name, 
        cuisines, 
        costForTwo, 
        avgRating, 
        sla 
    } = resData?.info;

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
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
};

const resList = [
    {
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
    },
    {
      "info": {
        "id": "187276",
        "name": "Royal Fast Food Centre",
        "cloudinaryImageId": "u2hhwtosq8cfwvkvvrct",
        "locality": "Friends Complex",
        "areaName": "Guntakal RTC",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Fast Food",
          "Kebabs"
        ],
        "avgRating": 4.3,
        "parentId": "172073",
        "avgRatingString": "4.3",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 0.4,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "0.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-24 22:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
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
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
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
        "link": "https://www.swiggy.com/restaurants/royal-fast-food-centre-friends-complex-guntakal-rtc-guntakal-187276",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "186300",
        "name": "Santosh Juice Centre",
        "cloudinaryImageId": "hecmwtetxtbjeqxwz5bi",
        "locality": "Sofia Street",
        "areaName": "Guntakal RTC",
        "costForTwo": "₹100 for two",
        "cuisines": [
          "Beverages"
        ],
        "avgRating": 4.1,
        "veg": true,
        "parentId": "177704",
        "avgRatingString": "4.1",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 0.2,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "0.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-03-24 21:00:00",
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
        "link": "https://www.swiggy.com/restaurants/santosh-juice-centre-sofia-street-guntakal-rtc-guntakal-186300",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "815623",
        "name": "Pavan Pizza And Icecream Parlour",
        "cloudinaryImageId": "97a5dc106839dc84ae7942195d814385",
        "locality": "Railway Station Road",
        "areaName": "Bhagya Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "Burgers",
          "Fast Food"
        ],
        "avgRating": 4.6,
        "parentId": "486041",
        "avgRatingString": "4.6",
        "totalRatingsString": "8",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 0.4,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "0.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextOpenTimeMessage": "Opens next at 10:30 am, today"
        },
        "badges": {
          
        },
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
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-9cdc4211-f179-454c-ae42-7b2843b56cf4"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/pavan-pizza-and-icecream-parlour-railway-station-road-bhagya-nagar-guntakal-815623",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "186309",
        "name": "Scoops",
        "cloudinaryImageId": "blkwndjctwxo5caf5hgk",
        "locality": "Hanumesh Nagar",
        "areaName": "Guntakal RTC",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Ice Cream",
          "Juices"
        ],
        "avgRating": 4,
        "veg": true,
        "parentId": "1354",
        "avgRatingString": "4.0",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 27,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextOpenTimeMessage": "Opens next at 11 am, today"
        },
        "badges": {
          
        },
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
        "link": "https://www.swiggy.com/restaurants/scoops-hanumesh-nagar-guntakal-rtc-guntakal-186309",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "616658",
        "name": "Sri venkataramana Hotel",
        "cloudinaryImageId": "mntux6wklt1fkyuel1xd",
        "locality": "V V Nagar",
        "areaName": "Guntakal RTC",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "South Indian"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "194763",
        "avgRatingString": "4.4",
        "totalRatingsString": "50+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 0.6,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "0.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextOpenTimeMessage": "Opens next at 11 am, today"
        },
        "badges": {
          
        },
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
        "link": "https://www.swiggy.com/restaurants/sri-venkataramana-hotel-v-v-nagar-guntakal-rtc-guntakal-616658",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "664781",
        "name": "Pizza X'press",
        "cloudinaryImageId": "da9037df16b31fa32aa1cd3cecd8b5e3",
        "locality": "Hanumesh Nagar",
        "areaName": "Guntakal RTC",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Pizzas",
          "Burgers",
          "Fast Food",
          "Beverages"
        ],
        "avgRating": 3.7,
        "parentId": "7906",
        "avgRatingString": "3.7",
        "totalRatingsString": "50+",
        "sla": {
          "deliveryTime": 43,
          "lastMileTravel": 0.3,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "0.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextOpenTimeMessage": "Opens next at 11 am, today"
        },
        "badges": {
          
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
        "aggregatedDiscountInfoV3": {
          "header": "₹175 OFF",
          "subHeader": "ABOVE ₹449",
          "discountTag": "FLAT DEAL"
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
        "link": "https://www.swiggy.com/restaurants/pizza-xpress-hanumesh-nagar-guntakal-rtc-guntakal-664781",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "849408",
        "name": "Mamas multicuisine ac family restaurant",
        "cloudinaryImageId": "b14cd9fc40129fcfb97aa7e621719d07",
        "locality": "Alur Road",
        "areaName": "Guntakal RTC",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Arabian",
          "Biryani",
          "Fast Food",
          "Snacks",
          "Tandoor",
          "Kebabs"
        ],
        "avgRating": 4.2,
        "parentId": "500673",
        "avgRatingString": "4.2",
        "totalRatingsString": "10+",
        "sla": {
          "deliveryTime": 48,
          "lastMileTravel": 2,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "2.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextOpenTimeMessage": "Opens next at 11 am, today"
        },
        "badges": {
          
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
        "aggregatedDiscountInfoV3": {
          "header": "15% OFF",
          "subHeader": "UPTO ₹45"
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
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-9cdc4211-f179-454c-ae42-7b2843b56cf4"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mamas-multicuisine-ac-family-restaurant-alur-road-guntakal-rtc-guntakal-849408",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "584950",
        "name": "Meat & Eat",
        "cloudinaryImageId": "gj3jolx3zldgrfcsqijf",
        "locality": "Kasapuram Road",
        "areaName": "Guntakal RTC",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Snacks",
          "Continental",
          "Burgers"
        ],
        "avgRating": 4.4,
        "parentId": "6748",
        "avgRatingString": "4.4",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 43,
          "lastMileTravel": 0.8,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "0.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextOpenTimeMessage": "Opens next at 11:30 am, today"
        },
        "badges": {
          
        },
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
        "link": "https://www.swiggy.com/restaurants/meat-and-eat-kasapuram-road-guntakal-rtc-guntakal-584950",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
  ];

// Body
const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {/* Restaurant card */}
          {resList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
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