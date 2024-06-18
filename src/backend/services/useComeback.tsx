import { useNavigate } from "react-router-dom"


 const useComeback = () => {
    const navigate = useNavigate()
    const handleComeback = () => {
        navigate("/")
    }

    return {handleComeback}
}

export default useComeback