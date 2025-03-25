// api endpoints connected to orders

export const fetchOrders = async (user) => {
    console.log(user);
    const response = await fetch(`${process.env.REACT_LOCAL_HOST}/api/orders`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
        },
    });
    return await response.json();
}