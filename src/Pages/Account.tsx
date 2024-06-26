import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UserInfo } from "../backend/services/Interface"
import api from "../backend/services/api"
import SimpleHeader from "../Components/SimpleHeader"
import styles from "../styles/Account.module.scss"

export default function Account(){

    const [userInfos, setInfosUser] = useState<UserInfo | undefined>(undefined)
    const [street, setStreet] = useState<string>("")
    const [houseNumber, setHouseNumber] = useState<string>("")
    const [neighborhood, setNeighborhood] = useState<string>("")
    const [cep, setCep] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [passwordConfirm, setPasswordConfirm] = useState<string>("")
    const {id} = useParams()

    useEffect(() => {
        const fetchDatasUser = async () => {
            const response = await api.get(`/users/${id}`)
            setInfosUser(response.data)
        }
        fetchDatasUser()
    },[id])


    const handlePersonalInfos = async(e:React.FormEvent) => {
        e.preventDefault()
        if(userInfos){
        try {
            const response = await api.put(`/users/${id}`,{
                cep: cep,
                street: street,
                housenumber: Number(houseNumber),
                neighborhood: neighborhood,
                email: userInfos.email,
                password: userInfos.password,
                name: userInfos.name,
                secondname: userInfos.secondname,
                age: userInfos.age,
                dogname: userInfos.dogname,
                dogage: userInfos.dogage,
                cash: userInfos.cash
            })
            console.log(response.status)
        } catch (error) {
            console.error(error)
        }
    }
    }

    const handlePassword = async(e:React.FormEvent) => {
        e.preventDefault()
        if(userInfos && password === passwordConfirm){
            const response = await api.put(`/users/${id}`,{
                password:password
            })
            console.log(response.status)
        }
    }
    return(
        <div className={styles.WrapperAccount}>
            <SimpleHeader id={`/store/${id}`}/>
            <main className={styles.WrapperMainAccount}>
                <section className={styles.SectionWrapperAcc}>
                <form action="" onSubmit={handlePersonalInfos} className={styles.FormsAccount}>
                    <div className={styles.ContentInForm}>
                        <h1 className={styles.TitleAcc}>Informações pessoais do Tutor</h1>
                    </div>
                    <div className={styles.ContentInForm}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="" id="email" disabled value={userInfos?.email}/>
                    </div>
                    <div className={styles.ContentInForm}>
                        <label htmlFor="Names">Nome Completo</label>
                        <input type="text" id="Names" disabled value={`${userInfos?.name} ${userInfos?.secondname}`} />
                    </div>
                    <div className={styles.ContentInForm}>
                        <label htmlFor="Age">Idade</label>
                        <input type="text" disabled id="Age" value={userInfos?.age}/>
                    </div>
                    <div className={styles.ContentInForm}>
                        <label htmlFor="cep">CEP</label>
                        <input type="text" id="cep" maxLength={9} minLength={9} value={cep} onChange={(e) => setCep(e.target.value)} />
                    </div>
                    <div className={styles.ContentInForm}>
                        <label htmlFor="Street">Rua</label>
                        <input type="text" id="Street"  value={street} onChange={(e) => setStreet(e.target.value)}/>
                    </div>
                    <div className={styles.ContentInForm}>
                        <label htmlFor="Number">Número</label>
                        <input type="number" name="" id="Number" value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)} />
                    </div>
                    <div className={styles.ContentInForm}>
                        <label htmlFor="Neig">Bairro</label>
                        <input type="text" name="" id="Neig" value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)} />
                    </div>
                    <div className={styles.ContentInForm}>
                        <button>Atualizar Informações</button>
                    </div>
                </form>
                </section>
                <section className={styles.SectionWrapperDog}>
                    <div className={styles.ContentInForm}>
                        <h1 className={styles.TitleAcc}>Informação do Pet</h1>
                    </div>
                    <div className={styles.ContentInForm}>
                        <label htmlFor="DogsName">Nome</label>
                        <input type="text" id="DogsName" value={userInfos?.dogname} disabled/>
                    </div>
                    <div className={styles.ContentInForm}>
                        <label htmlFor="DogsAge">Idade</label>
                        <input type="text" id="DogsAge" value={userInfos?.dogage} disabled/>
                    </div>
                </section>

                <section className={styles.SectionWrapperAcc}>
                    <form action="" onSubmit={handlePassword} className={styles.FormsAccount}>
                        <div className={styles.ContentInForm}>
                            <h1 className={styles.TitleAcc}>Trocar senha</h1>
                        </div>
                        <div className={styles.ContentInForm}>
                            <label htmlFor="Password">Senha</label>
                            <input type="password" id="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className={styles.ContentInForm}>
                            <label htmlFor="PasswordConfirm">Confirme sua senha</label>
                            <input type="password" id="PasswordConfirm" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>
                        </div>
                        <div className={styles.ContentInForm}>
                            <button>Mudar senha</button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    )
}