import { Link, useRouteError } from "react-router-dom";


const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (

        <div className="flex justify-center items-center w-full gap-3 h-screen flex-col">
            <h1 className="text-6xl font-extrabold text-red-600">Oops!!</h1>
            <h2 className="text-4xl font-bold *:">Something went wrong</h2>
            <hr />
            <h3 className="text-3xl font-semibold">{err.status}:{err.statusText}</h3>

            <Link to="/">
                <button className="cursor-pointer px-4 py-2 bg-blue-700 text-white rounded-md font-semibold text-lg hover:bg-blue-600 ">Return to Home</button>
            </Link>
        </div>


    )
}

export default Error;