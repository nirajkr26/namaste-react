import Card, { withPromotedLabel } from "./Card"
import { data } from "../utils/resList";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";

const Body = () => {
    //State variable -super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredData, setFilteredData] = useState(listOfRestaurants);
    const [searchText, setSearchText] = useState("");

    const CardPromoted = withPromotedLabel(Card);

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

    const onlineStatus = useOnlineStatus();

    if (onlineStatus == false)
        return (
            <h1 className="h-screen text-8xl text-red-500 font-bold w-full flex justify-center items-center">Looks you are offline</h1>
        )

    //normal js variable
    // let listOfRestaurants = data;
    return listOfRestaurants.length == 0 ? <Shimmer /> : (
        <div className="">
            <div className="flex gap-5 m-4 justify-center">
                <div className="flex gap-2">
                    <input type="text" className="border-1 py-1 px-2 rounded-md bg-white text-black" placeholder="search by name" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);

                        if (e.target.value == "") {
                            setFilteredData(listOfRestaurants)
                        }
                    }} />

                    <button className="bg-red-500 text-white px-2 py-1 rounded-md" onClick={() => {
                        const filteredData = listOfRestaurants.filter((res) => res.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredData(filteredData)

                    }}>Search</button>

                </div>
                <button className="bg-red-500 text-white px-2 py-1 rounded-md cursor-pointer" onClick={() => {

                    const filtered = listOfRestaurants.filter(
                        (res) => res.avgRating > 2
                    )
                    setListOfRestaurants(filtered);

                }} >Top Rated Restaurants</button>
            </div>

            <div className="my-5 flex flex-wrap justify-center gap-10">
                {
                    filteredData.map((resList) => (
                        <Link to={"/restaurants/" + resList.id} key={resList.id}>
                           
                            {resList.promoted ? (<CardPromoted resList={resList} />) : (<Card resList={resList} />)}

                        </Link>
                    ))
                }

            </div>
        </div>
    )
};

export default Body;

