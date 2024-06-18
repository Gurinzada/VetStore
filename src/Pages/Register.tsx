import { useState } from "react";
import api from "../backend/services/api";
import { useNavigate } from "react-router-dom";
import Tutor from "../backend/services/Interface";
import { useAuth } from "../Context/AuthProvider";
import HeaderDefault from "../Components/HeaderDefault";
import styles from "../styles/Register.module.scss"
import useError from "../backend/services/useError";
import useRegex from "../backend/services/useRegex";
// import useBcrypt from "../backend/services/useBcrypt";

export default function Register() {
  const [userName, setUserName] = useState<string>(``);
  const [secondName, setUserSecondName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [dogName, setDogName] = useState<string>("");
  const [dogAge, setDogAge] = useState<number>(1);
  const [userAge, setUserAge] = useState<number>(1);
  const [password, setPassword] = useState<string>(``);
  const navigate = useNavigate()
  const {login} = useAuth()
  const {showError, handleError, handleNegativeError} = useError()
  const {handlePassword} = useRegex()
  // const {handleSetPassword, hashPassword, hashedPassword} = useBcrypt()

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault()
    if(password !== passwordConfirm){
        handleError()
        setTimeout(() => {
          handleNegativeError()
        },2000)
        return
    }
      // handleSetPassword(password)
      // hashPassword()

    const isRight = handlePassword(password)
    if(isRight){
      try {
        const response = await api.post("/users", {
            email,
            password,
            name: userName,
            secondname: secondName,
            age: userAge,
            dogname: dogName,
            dogage:dogAge,
        })
          console.log(response.data)
          const newUserLog:Tutor = {
            email,
            password,
            userName: userName,
            userSecondName: secondName,
            Age: userAge,
            DogName: dogName,
            DogAge:dogAge,
            CEP: undefined,
            HouseNumber: undefined,
            Neighborhood: undefined,
            Street: undefined,
            cash:undefined
          }
          login(newUserLog)
          navigate(`/store/${response.data.id}`)
        
    } catch (error) {
        console.error(`Something goes wrong `, error)
    }
    } else{
      handleError()
        setTimeout(() => {
          handleNegativeError()
        },2000)
        return
    }
  }

  return (
    <div className={styles.Wrapper}>
      <HeaderDefault/>
      <form onSubmit={handleSubmit} className={styles.FormRegister}>
        <div>
          <h1 className={styles.TitleRegister}>Faça seu Cadastro!</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Digite seu sobrenome"
            value={secondName}
            onChange={(e) => setUserSecondName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Digite uma senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirme sua senha"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Insira sua idade"
            
            onChange={(e) => setUserAge(Number(e.target.value))}
          />
        </div>
        <div className={styles.WrapperDogs}>
          <div>
            <input
              type="text"
              placeholder="Digite o nome de seu Pet"
              value={dogName}
              onChange={(e) => setDogName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Insira a idade de seu Pet"
              onChange={(e) => setDogAge(Number(e.target.value))}
            />
          </div>
        </div>
        <div>
            <button>Cadastrar</button>
        </div>
        <div>
          {showError === true ? <span style={{color:"red"}}>Algo não esta no formato pedido!</span> : null}
        </div>
      </form>
    </div>
  );
}
