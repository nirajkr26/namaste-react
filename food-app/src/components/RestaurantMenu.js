import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/contents";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId}=useParams();

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId);

        const json = await data.json();
        setResInfo(json.data);
        console.log(json.data);
    }

    if (resInfo == null) return <Shimmer />;

    const { name, areaName, avgRating } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name} - {areaName}</h1>
            <h2>Rating {avgRating}</h2>
            <hr></hr>

            <ul>
                {itemCards.map(item => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - ${item.card.info.price ? item.card.info.price / 100 : item.card.info.finalPrice / 100}

                    </li>
                ))}
            </ul>

        </div>
    );
};

export default RestaurantMenu;