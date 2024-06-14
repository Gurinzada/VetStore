import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
import Bone from "../imgs/Logo.jpg"
export default function SimpleHeader({id}:any){
    const {logout} = useAuth()

    const handleLogout = () => {
        logout()
    }

    return(
        <header>
            <div><img src={Bone} alt="" /></div>
                <nav>
                    <Link to={id} style={{cursor:"pointer"}}><span>Voltar</span></Link>
                    <span onClick={handleLogout} style={{cursor:"pointer"}}>Logout</span>
                </nav>
            </header>
    )
}