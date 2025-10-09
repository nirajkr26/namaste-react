import { useDispatch } from "react-redux";
import { MENU_IMG_API } from "../utils/contents";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ itemCards }) => {
    return (
        <div>
            {itemCards.map((item) => (
                <Product key={item?.card?.info?.id || item?.id} detail={item?.card?.info || item} />
            ))}
        </div>
    )
}

export const Product = ({ detail }) => {
    // console.log(detail);
    const dispatch=useDispatch();

    const handleAddItem=(detail)=>{
        dispatch(addItem(detail));
        console.log(detail);

    } 

    return (
        <div className="w-6/12 my-2 m-auto py-2 px-4 flex justify-between items-center border-b border-gray-200">
            <div className=" w-8/12 text-start">
                <div className="font-semibold text-lg">{detail.name}</div>
                <div> ₹{(detail.price ? detail.price : detail.defaultPrice) / 100}</div>
                <div className="text-gray-700">{detail.description}</div>
            </div>
            <div className="w-3/12 h-40 border border-gray-800">
                <img className="h-full w-full" src={MENU_IMG_API+detail.imageId}></img>
                <button className="relative bottom-[26px] font-bold text-green-500 hover:bg-gray-50 cursor-pointer bg-white border w-full" onClick={()=>handleAddItem(detail)}>Add +</button>
            </div>
        </div>
    )
}



export default ItemList;