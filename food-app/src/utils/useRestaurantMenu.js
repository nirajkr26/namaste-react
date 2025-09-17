import { MENU_API } from "./contents";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json.data)
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;