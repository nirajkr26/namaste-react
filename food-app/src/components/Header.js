import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/contents"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";
// named import

const Header = () => {
    const [btnName, setBtnName] = useState("login");

    // if no dependency array=> useEffect is called on every render
    // if dependency array empty=[]=>useEffect is called on initial render(just once)
    // if dependency array is [btnReact] =>useEffect is called everytime when btnReact is updated

    const onlineStatus = useOnlineStatus();

    return (
        <div className={`flex  justify-between h-auto p-6 ${(onlineStatus)?"md:bg-green-200":"bg-red-300" } bg-pink-200`}>

            <img className="h-10" src={LOGO_URL}></img>

            <div className="">
                <ul className="flex items-center">
                    <li className="px-3 hover:font-semibold">Online:{onlineStatus ? "✅" : "❌"}</li>
                    <li className="px-3 hover:font-semibold"><Link to={"/"}>home</Link></li>
                    <li className="px-3 hover:font-semibold"><Link to="/about">about us</Link></li>
                    <li className="px-3 hover:font-semibold"><Link to={"/contact"}>contact</Link></li>
                    <li className="px-3 hover:font-semibold"><Link to={"/grocery"}>grocery</Link></li>
                    <li className="px-3 hover:font-semibold">cart</li>

                    <button className="bg-blue-600 text-white px-2 py-1 rounded-md" onClick={() => {
                        btnName == "login" ? setBtnName("logout") : setBtnName("login")
                    }} >{btnName}</button>
                </ul>
            </div>
        </div >
    );
};
export default Header;

//one file can only have one default export
//for multiple exports we have to use named exports