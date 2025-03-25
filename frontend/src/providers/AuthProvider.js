import { createContext, useContext, useState } from 'react';
import { login as apiLogin, register as apiRegister } from '../api/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        // load user data from localStorage on initial load
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const saveUserToLocalStorage = (userData) => {
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
    };


    const login = async (email, password) => {
        try {
            const data = await apiLogin(email, password);

            if (!data.token) {
                return data.message;
            }
            const userData = {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                token: data.token
            };

            saveUserToLocalStorage(userData);
            return null;
        }
        catch (error) {
            return 'Something went wrong. Try again later.';
        }
    }

    const register = async (firstName, lastName, email, password) => {
        try {
            const data = await apiRegister(firstName, lastName, email, password);
            if (!data.token) {
                return data.message;
            }
            const userData = {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                token: data.token
            };

            saveUserToLocalStorage(userData);
            return null;
        }
        catch (error) {
            return 'Something went wrong. Try again later.';
        }
    }

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };


    return (
        <AuthContext.Provider value={
            {
                user, login, register, logout
            }
        }>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);