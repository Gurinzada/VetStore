export default function useRegex(){

    const handlePassword = (anyPassword:string) => {
        const regexPassword = /^([?=.[a-zA-Z]|[0-9]){8,20}$/
        const ReadyToUse = regexPassword.test(anyPassword)
        if(ReadyToUse){
            return true
        } else{
            return false
        }
    }

    return {handlePassword}
}