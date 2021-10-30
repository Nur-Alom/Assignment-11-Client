import React, { useEffect, useState } from 'react';
import ManageOrder from '../ManageOrder/ManageOrder';
import './ManageOrders.css';

const ManageOrders = () => {
    const [orderItem, setOrderItem] = useState([]);

    useEffect(() => {
        fetch('https://peaceful-island-09936.herokuapp.com/ordersItem')
            .then(res => res.json())
            .then(data => setOrderItem(data))
    }, [orderItem]);

    return (
        <div className="myOrders-body">
            <div className="sticky-top">
                <ul className="d-flex container order-item">
                    <li>Name <i className="fas fa-arrow-down"></i></li>
                    <li>Email <i className="fas fa-arrow-down"></i></li>
                    <li>Package <i className="fas fa-arrow-down"></i></li>
                    <li>Action <i className="fas fa-arrow-down"></i></li>
                </ul>
            </div>
            <div className="">
                {
                    orderItem.map(order => <ManageOrder
                        key={order._id}
                        order={order}
                    ></ManageOrder>)
                }
            </div>
        </div>
    );
};

export default ManageOrders;