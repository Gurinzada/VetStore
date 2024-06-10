import { useState } from "react";
import api from "../backend/services/api";

export default function Register() {
  const [userName, setUserName] = useState<string>(``);
  const [secondName, setUserSecondName] = useState<string>();
  const [email, setEmail] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [dogName, setDogName] = useState<string>("");
  const [dogAge, setDogAge] = useState<number>(1);
  const [userAge, setUserAge] = useState<number>(1);
  const [password, setPassword] = useState<string>(``);

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault()
    if(password !== passwordConfirm){
        console.log(`Tratar erro depois`)
        return
    }
    try {
        const response = await api.post("/users", {
            email,
            password,
            name: userName,
            secondname: secondName,
            age: userAge,
            dogname: dogName,
            dogage:dogAge
        })
        console.log(response.data)
    } catch (error) {
        console.error(`Something goes wrong `, error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Faça seu Cadastro!</h1>
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
            value={userAge}
            onChange={(e) => setUserAge(Number(e.target.value))}
          />
        </div>
        <div>
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
              value={dogAge}
              onChange={(e) => setDogAge(Number(e.target.value))}
            />
          </div>
        </div>
        <div>
            <button>Cadastrar</button>
        </div>
      </form>
    </div>
  );
}
