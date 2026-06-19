import resList from "../utils/mockData.js";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

    //Local state variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    //Normal JS variable
    // let listOfRestaurants = [
    //     {
    //         "card": {
    //             "card": {
    //                 "info": {
    //                     "id": "41100",
    //                     "name": "Nagarjuna - Since 1984",
    //                     "cloudinaryImageId": "d2174e76ee28d6798770ba69470a7200",
    //                     "cuisines": [
    //                         "Andhra",
    //                         "South Indian",
    //                         "Biryani",
    //                         "Beverages",
    //                         "Desserts"
    //                     ],
    //                     "avgRating": 4.5,
    //                     "parentId": "509973",
    //                     "avgRatingString": "4.5",
    //                     "sla": {
    //                         "deliveryTime": 46,
    //                     },
    //                 },
    //             },
    //         },
    //     },
    //      {
    //         "card": {
    //             "card": {
    //                 "info": {
    //                     "id": "41102",
    //                     "name": "KFC",
    //                     "cloudinaryImageId": "d2174e76ee28d6798770ba69470a7200",
    //                     "cuisines": [
    //                         "Andhra",
    //                         "South Indian",
    //                         "Biryani",
    //                         "Beverages",
    //                         "Desserts"
    //                     ],
    //                     "avgRating": 4.1,
    //                     "parentId": "509973",
    //                     "avgRatingString": "4.5",
    //                     "sla": {
    //                         "deliveryTime": 46,
    //                     },
    //                 },
    //             },
    //         },
    //     },
    //     {
    //         "card": {
    //             "card": {
    //                 "info": {
    //                     "id": "30529",
    //                     "name": "Nagarjuna - Since 1984",
    //                     "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2026/2/12/269d3e90-7681-4c9e-9502-27e25fff1dea_58c9edb9-ace5-4fe8-9518-1b2fc043300f.",
    //                     "cuisines": [
    //                         "Andhra",
    //                         "South Indian",
    //                         "Biryani",
    //                         "Beverages",
    //                         "Desserts"
    //                     ],
    //                     "avgRating": 3.8,
    //                     "parentId": "509973",
    //                     "avgRatingString": "4.5",
    //                     "sla": {
    //                         "deliveryTime": 36,
    //                     },
    //                 },
    //             },
    //         },
    //     },
    // ];

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        //filter logic here
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.card.card.info.avgRating > 4
                        );
                        setListOfRestaurents(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>

            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.card.card.info.id} resData={restaurant} />
                ))}

            </div>
        </div>
    );
};

export default Body;
