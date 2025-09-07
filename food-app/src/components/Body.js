import Card from "./Card"
import { data } from "../utils/resList";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    //State variable -super powerful variable
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    //callback function runs as soon as component renders

    const fetchData = async () => {

        const apiData = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59430&lng=85.13520&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        );

        const json = await apiData.json();

        const cards = json?.data?.cards || [];

        const restaurants = cards
            .map((c) => c?.card?.card?.info) // get restaurant info
            .filter((info) => info); // remove undefined

        setFilteredData(restaurants);

    }

    //conditional rendering



    //normal js variable
    // let filteredData = data;
    return filteredData.length == 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {

                    const filtered = filteredData.filter(
                        (res) => res.avgRating > 4
                    )
                    setFilteredData(filtered);

                }} >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredData.map((resList) => (
                        <Card key={resList.id} resList={resList} />
                    ))
                }

            </div>
        </div>
    )
};

export default Body;

