import resList from "../utils/mockData.js";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
        <div className="body">
            <div className="search">searching item</div>
            <div className="res-container"> 

               { resList.map((restaurant)=>(
                <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant}/>
                ))}

            </div>
        </div>
    );
};

export default Body;
