import { useState } from "react";

export default function useError(){
    const [showError, setError] = useState<boolean>(false)

    const handleError = () => {
        setError(true)
    }

    const handleNegativeError = () => {
        setError(false)
    }

    return {showError, handleError, handleNegativeError}
}