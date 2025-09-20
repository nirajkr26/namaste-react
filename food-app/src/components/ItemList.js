import { MENU_IMG_API } from "../utils/contents";

const ItemList = ({ itemCards }) => {
    return (
        <div>
            {itemCards.map((item) => (
                <Product key={item?.card?.info?.id} detail={item?.card?.info} />
            ))}
        </div>
    )
}

const Product = ({ detail }) => {
    // console.log(detail);
    return (
        <div className="w-6/12 my-2 m-auto py-2 px-4 flex justify-between items-center border-b border-gray-200">
            <div className=" w-8/12 text-start">
                <div className="font-semibold text-lg">{detail.name}</div>
                <div> ₹{(detail.price ? detail.price : detail.defaultPrice) / 100}</div>
                <div className="text-gray-700">{detail.description}</div>
            </div>
            <div className="w-3/12 h-40 border border-gray-800">
                <img className="h-full w-full" src={MENU_IMG_API+detail.imageId}></img>
            </div>
        </div>
    )
}

export default ItemList;