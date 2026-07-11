import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
// import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import { createBrowserRouter, RouterProvider ,Outlet } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu.js";


//chunking
//code splitting
//dynamic bundling
//lazy loading
//on demand loading
//dynamic import


//not using keys (not acceptable) <<<< index as key <<<<<<<<<<unique id(best practices).
const Grocery=lazy(()=>import("./components/Grocery"));
const About=lazy(()=>import("./components/About"));

const AppLayout = () => {
    return (<div className="app">
        <Header />
        <Outlet/>
    </div>
    );
};



const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path:"/",
                element:<Body/>
            },
            {
                path: "/about",
                 element:<Suspense fallback={<h1>Loading....</h1>}><About/></Suspense>,

            },
            {
                path: "/contact",
                element: <Contact />,
  
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement: <Error />,
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);




