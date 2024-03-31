import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
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
            className="w-[250px] p-4 bg-gray-100 hover:bg-gray-200 h-full rounded-lg"
        >  
            <img
                className='object-fill w-[218] h-[150] rounded-lg'
                alt="res-logo"
                src={CDN_URL + resData.info.cloudinaryImageId}
            />
            <h3 className="font-bold mt-3">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
};

// Higher order component
// Input - RestaurantCard ==> RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) =>{
    return (props)=>{
        return (
            <div className="h-full">
                <label className="absolute bg-black p-2 text-white text-sm">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;