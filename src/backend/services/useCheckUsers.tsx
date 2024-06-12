import { useState } from "react"
import api from "./api"
import { UserInfo } from './Interface'

function useCheckUsers(){
    const [infosUser, setInfosUser] = useState<UserInfo[] | null>(null)
    
    const check = async(email:string, password:string) => {
        const response = await api.get("/users")
        setInfosUser(response.data)
        if(infosUser){
            const find:UserInfo | undefined = infosUser.find((user) => user.email === email && user.password === password)
            if(find !== undefined){
                return find
            } else{
                return false
            }
        }else{
            return false
        }
    }

    
    return {check}
}

export default useCheckUsers