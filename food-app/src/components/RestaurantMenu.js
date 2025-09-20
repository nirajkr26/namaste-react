import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo == null) return <Shimmer />;

    const { name, areaName, avgRating } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c =>
        c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    // console.log(categories)

    return (
        <div className="m-5">
            <div className="text-center">
                <h1 className="text-3xl font-bold">{name} - {areaName}</h1>
                <h2 className="text-xl font-semibold">Rating {avgRating}</h2>
            </div>
            <div className="text-center">
                {categories.map((category) => (<RestaurantCategory key={category.card.card.categoryId} data={category?.card?.card} />))}
            </div >

        </div>
    );
};

export default RestaurantMenu;