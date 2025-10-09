import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div>
                <button className="bg-black rounded-2xl text-white p-2" onClick={handleClearCart}>clear cart</button>
                <ItemList itemCards={cartItems} />
            </div>
        </div>
    )
}

export default Cart;
