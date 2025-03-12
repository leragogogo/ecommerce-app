export const fetchOrders = async (user) => {
    const response = await fetch("http://localhost:5001/api/orders", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
        },
    });
    return await response.json();
}