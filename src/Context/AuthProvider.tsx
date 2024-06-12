import { createContext, useContext, useState, ReactNode } from "react";
import Tutor from "../backend/services/Interface";

interface AuthContextType {
    user: Tutor | null;
    login: (user: Tutor) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<Tutor | null>(null)
    const login = (user: Tutor) => {
        setUser(user);
        console.log(user)
    }

    const logout = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
