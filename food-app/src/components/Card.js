

const Card = (props) => {
    const { resList } = props;
    const { name, cuisines, avgRating, areaName } = resList;
    return (
        <div className="w-60 h-80 bg-gray-100 hover:bg-gray-200 border-2 p-5 rounded-lg">
            <img className=" w-auto rounded-lg" src="https://blog.swiggy.com/wp-content/uploads/2024/02/Masala-Dosa-1024x538.jpg"></img>
            <h2 className="py-2 font-bold text-lg">{name}</h2>
            {/* optional chaining (?.) is used to deal with undefined or null errors when navigating through chain of properties */}
            <p>{cuisines.join(", ")}</p>
            <p>{avgRating} stars</p>
            <p> <span className="font-semibold">Area</span> - {areaName} </p>

        </div>
    )
};

export default Card;

