import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import './MyOrders.css';

const MyOrders = () => {
    const { users } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://peaceful-island-09936.herokuapp.com/ordersItem`)
            .then(res => res.json())
            .then(data => {
                const result = data?.filter(dt => dt.email === users.email);
                setOrders(result);
            })
    }, [orders]);

    return (
        <div className="myOrders-body">
            <div className="">
                <ul className="d-flex container order-item">
                    <li>Name <i className="fas fa-arrow-down"></i></li>
                    <li>Address <i className="fas fa-arrow-down"></i></li>
                    <li>Package <i className="fas fa-arrow-down"></i></li>
                    <li>Status <i className="fas fa-arrow-down"></i></li>
                    <li>Action <i className="fas fa-arrow-down"></i></li>
                </ul>
            </div>
            <div>
                {
                    orders.map(order => <MyOrder
                        key={order._id}
                        order={order}
                    ></MyOrder>)
                }
            </div>
        </div>
    );
};

export default MyOrders;