import React, { useState } from "react"
import HeaderDefault from "../Components/HeaderDefault"
import Tutor, { UserInfo } from "../backend/services/Interface"
import { useNavigate } from "react-router-dom"
import useCheckUsers from "../backend/services/useCheckUsers"
import { useAuth } from "../Context/AuthProvider"
import styles from "../styles/Login.module.scss"
import useError from "../backend/services/useError"

export default function Login(){
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate()
    const {check} = useCheckUsers()
    const {login} = useAuth()
    const {showError, handleError, handleNegativeError} = useError()

    const handleSubmit = async(e:React.FormEvent) => {
        e.preventDefault()
        const response:boolean | UserInfo  = await check(email, password)
        if(typeof response !== "boolean"){
            const theUser:Tutor = {
                Age: response.age,
                CEP: response.cep,
                DogAge: response.dogage,
                DogName: response.dogname,
                email: response.email,
                HouseNumber: response.housenumber,
                Neighborhood: response.neighborhood,
                password: response.password,
                Street: response.street,
                userName: response.name,
                userSecondName: response.secondname,
                cash: response.cash
            }
            login(theUser)
            navigate(`/store/${response.id}`)
        }else{
            handleError()
            setTimeout(() => {
                handleNegativeError()
            },2000)
        }
    }

    return(
        <div className={styles.Wrapper}>
            <HeaderDefault/>
            <form action="" onSubmit={handleSubmit} className={styles.FormLogin}>
                <h1 className={styles.Title}>Faça Login agora mesmo!</h1>
                <div className={styles.ContentLogin}>
                    <label htmlFor="userEmail">E-mail</label>
                    <input type="email" id="userEmail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={styles.ContentLogin}>
                    <label htmlFor="userPassword">Senha</label>
                    <input type="password" id="userPassword" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <button className={styles.BntLogin}>Login🐶</button>
                </div>
                {showError === true ? <span style={{color:"red"}}>Email ou senha incorretos</span> : null}
            </form>
        </div>
    )
}