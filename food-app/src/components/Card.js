

const Card = (props) => {
    const { resList } = props;
    const { name, cuisines, avgRating, areaName,cloudinaryImageId } = resList;
    return (
        <div className="w-60 h-80 bg-gray-100 hover:bg-gray-200 border-2 p-5 rounded-lg">
            <img className=" w-50 h-25 rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+cloudinaryImageId}></img>
            <h2 className="py-2 font-bold text-lg">{name}</h2>
            {/* optional chaining (?.) is used to deal with undefined or null errors when navigating through chain of properties */}
            <p>{cuisines.join(", ")}</p>
            <p>{avgRating} stars</p>
            <p> <span className="font-semibold">Area</span> - {areaName} </p>

        </div>
    )
};

//Higher Order Component

//input - Card => CardPromoted


export const withPromotedLabel = (Card) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white rounded-tl-xl flex justify-center rounded-tr-xl px-2 w-60 ">Promoted</label>
                <Card {...props} />
            </div>
        );
    };
};

export default Card;

