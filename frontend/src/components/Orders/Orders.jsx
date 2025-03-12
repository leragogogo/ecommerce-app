import React, { useEffect } from 'react';
import { useOrders } from "../../providers/OrdersProvider";
import { useAuth } from '../../providers/AuthProvider';
import OrderCard from "./OrderCard/OrderCard";
import './Orders.css';

const Orders = () => {
    const { user } = useAuth();
    const { orders, loadOrders } = useOrders();
    useEffect(() => {
        loadOrders(user);
        console.log(orders);
    }, []);
    return (
        <div className="orders-page">
            {orders.length == 0 ?
                <div className='empty-orders-screen'>
                    <h3 className='empty-orders-text'>
                        You didn't order anything yet.
                    </h3>
                </div> :
                <div className="orders-grid">
                    <h2>Orders</h2>
                    {orders.map(order => (
                        <OrderCard order={order} />
                    ))}
                </div>}

        </div >
    );
};

export default Orders;