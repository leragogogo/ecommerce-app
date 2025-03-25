// api endpoints connected to authorization

export const login = async (email, password) => {
    return await fetch(`${process.env.REACT_LOCAL_HOST}/api/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });
}

export const register = async (firstName, lastName, email, password) => {
    return await fetch(`${process.env.REACT_LOCAL_HOST}/api/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password }),
    });
}