// api endpoints connected to authorization

import { localhost } from './config';
export const login = async (email, password) => {
    const response = await fetch(`${localhost}/api/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });
    return await response.json();
}

export const register = async (firstName, lastName, email, password) => {
    const response = await fetch(`${localhost}/api/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password }),
    });
    return await response.json();
}