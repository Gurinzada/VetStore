
import api from "./api"
import { UserInfo } from './Interface'

function useCheckUsers(){
    
    const check = async(email:string, password:string) => {
        const response = await api.get("/users")
        console.log(response.data)
        if(response){
            const myDatas:UserInfo[] = response.data
            const find = myDatas.find((user) => user.email === email && user.password === password)
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