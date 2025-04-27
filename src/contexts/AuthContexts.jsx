import { createContext, useState, useContext } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => { 
    const [user, setUser] = useState(null);

    const loginUser = (userData) => {
        setUser(userData);
        Cookies.set('token', userData.token, {
            expires: 7,
            secure: true,
            sameSite: 'strict'
        });
    };

    const logout = () => {
        setUser(null);
        Cookies.remove('token');
    };

    return (
        <AuthContext.Provider value ={{user, loginUser, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);