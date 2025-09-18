import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo == null) return <Shimmer />;

    const { name, areaName, avgRating } = resInfo?.cards[2]?.card?.card?.info;
    
    console.log(resInfo);

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);

    return (
        <div className="m-5">
            <div className="flex flex-col items-center m-5">
                <h1 className="text-4xl font-bold">{name} - {areaName}</h1>
                <h2 className="text-xl font-semibold">Rating {avgRating}</h2>
            </div>
            <div className="flex justify-center">

                <ul className="border-2 bg-yellow-100 text-lg w-[60vw] p-6 rounded-lg list-item">
                    {itemCards.map(item => (
                        <li className="flex py-1 justify-between" key={item.card.info.id}>
                            <span>{item.card.info.name}</span> <span className="font-bold">${item.card.info.price ? item.card.info.price / 100 : item.card.info.finalPrice / 100}</span>

                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default RestaurantMenu;