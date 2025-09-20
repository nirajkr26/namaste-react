import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
console.log(data);
    return (
        <div>
           <div className="w-6/12 m-auto bg-gray-100 shadow-lg p-4 my-4 flex justify-between">
                <span className="font-bold text-lg">
                    {data.title} ({data.itemCards.length})
                </span><span>⏬</span>
            </div>
            <ItemList itemCards={data.itemCards}/>
        </div>

    )
}

export default RestaurantCategory;