// api endpoints connected to orders
import { localhost } from './config';
export const fetchOrders = async (user) => {
    console.log(user);
    const response = await fetch(`${localhost}/api/orders`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
        },
    });
    return await response.json();
}