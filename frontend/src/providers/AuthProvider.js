import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        try {
            const response = await fetch("http://localhost:5001/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (!response.ok) {
                return data.message || "Login failed. Please check your credentials.";
            }
            setUser({ firstName: data.firstName, lastName: data.lastName, email: data.email, token: data.token })
            return null;
        }
        catch (error) {
            return 'Something went wrong. Try again later.';
        }
    }

    const register = async (firstName, lastName, email, password) => {
        try {
            const response = await fetch("http://localhost:5001/api/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ firstName, lastName, email, password }),
            });

            const data = await response.json();
            if (!response.ok) {
                return data.message || "Account with this credentials already exists.";
            }
            setUser({ firstName: data.firstName, lastName: data.lastName, email: data.email, token: data.token })
            return null;
        }
        catch (error) {
            return 'Something went wrong. Try again later.';
        }
    }

    return (
        <AuthContext.Provider value={
            {
                user, login, register
            }
        }>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);