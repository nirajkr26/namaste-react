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
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL}></img>
            </div>
            <div className="items">
                <ul>
                    <li>Online:{onlineStatus ? "✅" : "❌"}</li>
                    <li><Link to={"/"}>home</Link></li>
                    <li><Link to="/about">about us</Link></li>
                    <li><Link to={"/contact"}>contact</Link></li>
                    <li>cart</li>

                    <button onClick={() => {
                        btnName == "login" ? setBtnName("logout") : setBtnName("login")
                    }} className="login">{btnName}</button>
                </ul>
            </div>
        </div >
    );
};
export default Header;

//one file can only have one default export
//for multiple exports we have to use named exports