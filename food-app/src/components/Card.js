
const Card = (props) => {
    const { name, cuisine, rating, time } = props;
    return (
        <div className="card">
            <img className="res-img" src="https://blog.swiggy.com/wp-content/uploads/2024/02/Masala-Dosa-1024x538.jpg"></img>
            <h2>{name}</h2>
            {/* optional chaining (?.) is used to deal with undefined or null errors when navigating through chain of properties */}
            <p>{cuisine}</p>
            <p>{rating} stars</p>
            <p>{props.time} minutes</p>
        </div>
    )
};

export default Card;

