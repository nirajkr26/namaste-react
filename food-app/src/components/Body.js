import Card from "./Card"
import { data } from "../utils/resList";
import { useState } from "react";

const Body = () => {
    //State variable -super powerful variable
    const [filteredData, setFilteredData] = useState(data);

    //normal js variable
    // let filteredData = data;
    return (
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

