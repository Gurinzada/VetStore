import { Link } from "react-router-dom";
import Bone from "../imgs/Logo.jpg"
import styles from "../styles/HeaderDefault.module.scss"

export default function HeaderDefault(){
    return(
        <header className={styles.HeaderDefault}>
            <div>
                <img src={Bone} alt="" className={styles.Bone}/>
            </div>
            <nav className={styles.NavBar}>
                <Link to={"/register"}>Sign Up</Link>
                <Link to={"/login"}>Login</Link>
            </nav>
    </header>
    )
}