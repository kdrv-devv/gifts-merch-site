import { createBrowserRouter } from "react-router-dom";
import { AllProducts, Home, Seam } from "../pages";


export const root = createBrowserRouter([

    {
        path:'/',
        element:<Home/>
    },
    {
        path:'allproducts',
        element:<AllProducts/>
    },
    {
        path:"seam",
        element:<Seam/>
    }


])