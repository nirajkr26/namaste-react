import Card from "./Card"

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                search<input type="text"></input>
            </div>
            <div className="res-container">
                <Card name="meghna foods" cuisine="biryani,chicken 65" rating="4.4" time="38" />
                <Card name="kfc" cuisine="chicken legs and wings" rating="4.8" time="25" />

            </div>
        </div>
    )
};

export default Body;

