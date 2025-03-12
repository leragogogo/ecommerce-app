import React from 'react';
import './OrderCard.css';

const OrderCard = ({ order }) => {
    const loadImage = (imagePath) => {
        return require(`../../../assets/pets/${imagePath}`);
    };
    return (
        <div className='order-card'>
            <div className='order-title'>
                <h3>
                    {`Order: ${order.id}`}
                </h3>
                <h3>
                    {`Total price: €${order.totalPrice}`}
                </h3>
            </div>
            <div className='order-items-container'>
                {order.orderItems.map((orderItem) => (
                    <div>
                        <div className="order-image-container">
                            <img src={loadImage(orderItem.image)} alt={orderItem.name} className="order-image" />
                            {orderItem.quantity > 0 && <span className="quantity-badge">{orderItem.quantity}</span>}
                        </div>
                        <h4>{orderItem.name}</h4>
                    </div>
                ))
                }
            </div>

        </div>
    );
};

export default OrderCard;