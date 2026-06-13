import { CDN_URL } from "../utils/constant";


const RestaurantCard = (props) => {
    const {resData}=props;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className="res-logo"
                alt="res-logo" src={CDN_URL+ resData.card.card.info.cloudinaryImageId}/>
            <h3>{resData.card.card.info.name}</h3>
            <h4>{resData.card.card.cuisines }</h4>
            <h4>{resData.card.card.info.avgRating} stars</h4>
            <h4>{resData.card.card.info.costForTwo}</h4>
            <h4>{resData.card.card.info.sla.deliveryTime} minutes</h4>
            
        </div>
    ); 
};

export default RestaurantCard;