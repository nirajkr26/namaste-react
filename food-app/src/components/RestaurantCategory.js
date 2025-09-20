import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
    // console.log(data);

    const handleClick = () => {
        setShowIndex()
    }

    return (
        <div>
            <div onClick={handleClick} className="w-6/12 m-auto cursor-pointer  bg-gray-100 shadow-lg p-4 my-4 flex justify-between">
                <span className="font-bold text-lg">
                    {data.title} ({data.itemCards.length})
                </span><span>⏬</span>
            </div>

            {showItem && <ItemList itemCards={data.itemCards} />}
        </div>

    )
}

export default RestaurantCategory;