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
            /*const response = await fetch("http://localhost:5001/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });*/
            const data = await apiLogin(email, password).json();
            if (!/*response*/data.ok) {
                return data.message || "Login failed. Please check your credentials.";
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
            /*const response = await fetch("http://localhost:5001/api/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ firstName, lastName, email, password }),
            });*/

            const data = await apiRegister(firstName, lastName, email, password).json();
            if (!/*response*/data.ok) {
                return data.message || "Account with this credentials already exists.";
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