import Card from "./Card"
import { data } from "../utils/resList";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    //State variable -super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredData, setFilteredData] = useState(listOfRestaurants);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);
    //callback function runs as soon as component renders

    const fetchData = async () => {

        const apiData = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38504&lng=78.48667&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        );

        const json = await apiData.json();

        const cards = json?.data?.cards || [];

        const restaurants = cards
            .map((c) => c?.card?.card?.info) // get restaurant info
            .filter((info) => info); // remove undefined

        setListOfRestaurants(restaurants);
        setFilteredData(restaurants);

    }

    //conditional rendering



    //normal js variable
    // let listOfRestaurants = data;
    return listOfRestaurants.length == 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter" style={{ display: "flex", gap: "10px" }}>
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);

                        if (e.target.value == "") {
                            setFilteredData(listOfRestaurants)
                        }
                    }} />

                    <button onClick={() => {
                        const filteredData = listOfRestaurants.filter((res) => res.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredData(filteredData)

                    }}>Search</button>

                </div>
                <button className="filter-btn" onClick={() => {

                    const filtered = listOfRestaurants.filter(
                        (res) => res.avgRating > 4
                    )
                    setListOfRestaurants(filtered);

                }} >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredData.map((resList) => (
                        <Link to={"/restaurants/" + resList.id}  key={resList.id}>
                            <Card resList={resList} />
                        </Link>
                    ))
                }

            </div>
        </div>
    )
};

export default Body;

