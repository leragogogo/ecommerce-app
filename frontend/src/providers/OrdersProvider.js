import { createContext, useContext, useState } from 'react';
import { fetchOrders } from "../api/orders";
import { Order, OrderItem } from "../models/Order";

const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadOrders = async (user) => {
        try {
            setLoading(true);
            const data = await fetchOrders(user);

            setOrders(
                data.map(
                    (order) => new Order(
                        order._id, order.orderItems.map((orderItem) => new OrderItem(
                            orderItem.product.name, orderItem.product.image, orderItem.quantity,
                        )),
                        order.totalPrice, order.createdAt,
                    )
                )
            );
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <OrdersContext.Provider
            value={{
                orders,
                loading,
                error,
                loadOrders,
            }}
        >
            {children}
        </OrdersContext.Provider>
    );
};

export const useOrders = () => useContext(OrdersContext);