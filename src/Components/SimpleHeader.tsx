import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
import Bone from "../imgs/Logo.jpg"
import styles from "../styles/SimpleHeader.module.scss"

export default function SimpleHeader({id}:any){
    const {logout} = useAuth()

    const handleLogout = () => {
        logout()
    }

    return(
        <header className={styles.HeaderWrapperSimple}>
            <div>
                <img src={Bone} alt="" className={styles.Bone}/>
            </div>
                <nav className={styles.NavBarSimple}>
                    <Link to={id} style={{cursor:"pointer"}}><span>Voltar</span></Link>
                    <span onClick={handleLogout} style={{cursor:"pointer"}} className={styles.SpanLogout}>Logout</span>
                </nav>
            </header>
    )
}