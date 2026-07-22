import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constant.js"
// import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory.js";



const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    //  const {resId}=useParams();

    //  const resInfo=useRestaurantMenu(resId);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            MENU_URL
        );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    if (resInfo == null) return <Shimmer />;

    const { name, cuisines, costForTwo } = resInfo?.cards[8]?.card?.card?.info || {};





    //card.card.itemCards.card.info.name/price
    //card.info.name/price

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h3 className="font-bold text-lg">{cuisines?.join(",")}</h3>
            <h3>{costForTwo}</h3>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
            {categories.map((category) => {
                <RestaurantCategory />
            })}
        </div>
    );
};

export default RestaurantMenu;
