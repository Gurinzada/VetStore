import { createBrowserRouter } from "react-router-dom";
import Home from "../src/Pages/Home"
import Register from "./Pages/Register";
import Store from "./Pages/Store";
import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Pages/Login";

const Router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },{
        path:"/register",
        element:<Register/>
    },{
        path:"/store/:id",
        element: <PrivateRoute><Store/></PrivateRoute>
    },{
        path:"/login",
        element: <Login/>
    }
])


export default Router