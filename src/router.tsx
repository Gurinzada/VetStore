import { createBrowserRouter } from "react-router-dom";
import Home from "../src/Pages/Home"
import Register from "./Pages/Register";
import Store from "./Pages/Store";
import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Pages/Login";
import Account from "./Pages/Account";
import MySpending from "./Pages/MySpending";
import ServiceDetails from "./Pages/ServicesDetails";

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
    },{
        path:"/store/account/:id",
        element: <PrivateRoute><Account/></PrivateRoute>
    },{
        path: "/store/myspending/:id",
        element: <PrivateRoute><MySpending/></PrivateRoute>
    },{
        path:"/store/details/:id/:idProduct",
        element:<PrivateRoute><ServiceDetails/></PrivateRoute>
    }
])


export default Router