import React, { lazy, Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact"
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

// chunking / code splitting / dynamic bundling / lazy loading // on demand loading

const Grocery = lazy(() => import("./components/Grocery"));



const AppLayout = () => {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const data = {
            name: "Niraj"
        }

        setUserName(data.name);
    }, [])

    return (
        <UserContext.Provider value={{ loggedInUser: userName }}>
            <div className="app">
                <Header />
                <Outlet />
                <Footer />
            </div>
        </UserContext.Provider>
    );
};



const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer />}><Grocery />
                </Suspense>
            }
        ],
        errorElement: <Error />,
    },

])


const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
