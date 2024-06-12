import { Link } from "react-router-dom";
import Bone from "../imgs/Logo.jpg"

export default function HeaderDefault(){
    return(
        <header>
        <div><img src={Bone} alt="" /></div>
        <nav>
            <Link to={"/register"}>Sign Up</Link>
            <Link to={"/login"}>Login</Link>
        </nav>
    </header>
    )
}