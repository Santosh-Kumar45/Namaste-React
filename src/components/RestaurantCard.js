import { CDN_URL } from "../utils/constant";


const RestaurantCard = (props) => {
    const {resData}=props;

    return (
        
        <div className="m-4 p-4 w-[240px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img
                className="rounded-lg"
                alt="res-logo" src={CDN_URL+ resData.card.card.info.cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{resData.card.card.info.name}</h3>
            <h4>{resData.card.card.cuisines }</h4>
            <h4>{resData.card.card.info.avgRating} stars</h4>
            <h4>{resData.card.card.info.costForTwo}</h4>
            <h4>{resData.card.card.info.sla.deliveryTime} minutes</h4>
            
        </div>
    ); 
};


export const withPromotedLabel=(RestaurantCard)=>{
    return()=>{
        return(
            <div>
                <label>Promoted</label>
                <RestaurantCard/>
            </div>
        )
    }
}

export default RestaurantCard;