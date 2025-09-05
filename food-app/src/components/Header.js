import {LOGO_URL} from "../utils/contents" 
// named import

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL}></img>
            </div>
            <div className="items">
                <ul>
                    <li>home</li>
                    <li>about us</li>
                    <li>contact</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    );
};
export default Header;

//one file can only have one default export
//for multiple exports we have to use named exports