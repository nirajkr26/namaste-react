

const Card = (props) => {
    const { resList } = props;
    const { name, cuisines, avgRating, deliveryTime } = resList?.info;
    return (
        <div className="card">
            <img className="res-img" src="https://blog.swiggy.com/wp-content/uploads/2024/02/Masala-Dosa-1024x538.jpg"></img>
            <h2>{name}</h2>
            {/* optional chaining (?.) is used to deal with undefined or null errors when navigating through chain of properties */}
            <p>{cuisines.join(", ")}</p>
            <p>{avgRating} stars</p>
            <p>{deliveryTime} minutes</p>
        </div>
    )
};

export default Card;

