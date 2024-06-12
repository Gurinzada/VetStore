import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../backend/services/api"
import { UserInfo } from "../backend/services/Interface"

export default function Store(){

    const [userInfos, setUserInfos] = useState<UserInfo | null>(null)
    const {id} = useParams()

    useEffect(() => {
        const fetchUserData = async() => {
            const response = await api.get(`/users/${id}`)
            setUserInfos(response.data)
            console.log(response.data)
            console.log(userInfos)
        }
        fetchUserData()
    },[])

    return(
        <div></div>
    )
}