import React from "react";
import { createRoot } from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://w7.pngwing.com/pngs/664/210/png-transparent-uber-eats-muncheez-delivery-online-food-ordering-food-delivery-food-logo-uber-eats.png"></img>
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

const RestaurantCard = () => {
    return (
        <div className="card">
            <img className="res-img" src="https://blog.swiggy.com/wp-content/uploads/2024/02/Masala-Dosa-1024x538.jpg"></img>
            <h2>Meghna Foods</h2>
            <p>burger,fries,pizza</p>
            <p>4.4 stars</p>
            <p>38 minutes</p>
        </div>
    )
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                search<input type="text"></input>
            </div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
};

const Footer = () => {
    return (
        <div className="footer">

        </div>
    )
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
