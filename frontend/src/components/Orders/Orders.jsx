import React, { useEffect } from 'react';
import { useOrders } from "../../providers/OrdersProvider";
import OrderCard from "./OrderCard/OrderCard";
import './Orders.css';
import { Link } from "react-router-dom";

const Orders = () => {
    const { orders, loadOrders } = useOrders();
    useEffect(() => {
        loadOrders();
        console.log(orders);
    }, []);
    return (
        <div className="orders-page">
            {orders.length == 0 ?
                <div className='empty-orders-screen'>
                    <h3 className='empty-orders-text'>
                        You didn't order anything yet.
                    </h3>
                    <Link to="/pets" className='continue-shopping'>
                        Go shopping
                    </Link>
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