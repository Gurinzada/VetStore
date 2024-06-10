import { createBrowserRouter } from "react-router-dom";
import Home from "../src/Pages/Home"
import Register from "./Pages/Register";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },{
        path:"/register",
        element:<Register/>
    }
])


export default Router