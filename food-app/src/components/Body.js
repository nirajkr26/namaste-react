import Card from "./Card"
import { data } from "../utils/resList";

const Body = () => {
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn">Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    data.restaurants.map((resList)=>(
                        <Card key={resList.info.id} resList={resList}/>
                    ))
                }

            </div>
        </div>
    )
};

export default Body;

