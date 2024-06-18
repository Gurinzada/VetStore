// import bcrypt from "bcrypt";
// import { useState } from "react";

// const useBcrypt = () => {
//     const saltRounds = 10;
//     const [password, setPassword] = useState<string>('');
//     const [hashedPassword, setHashedPassword] = useState<string>('');

//     const handleSetPassword = (newPassword: string) => {
//         setPassword(newPassword);
//     };

//     const hashPassword = async () => {
//         try {
//             const salt = await bcrypt.genSalt(saltRounds);
//             const hash = await bcrypt.hash(password, salt);
//             console.log(`Senha hash: ${hash}`);
//             setHashedPassword(hash);
//         } catch (err) {
//             console.error("Erro ao gerar hash:", err);
//         }
//     };

//     return { handleSetPassword, hashedPassword, hashPassword };
// };

// export default useBcrypt;
