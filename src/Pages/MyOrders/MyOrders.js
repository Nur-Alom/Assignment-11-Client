import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const { users } = useAuth();
    const [orders, setOrders] = useState({});
    const id = users.displayName;
    // console.log(params);

    useEffect(() => {
        fetch(`https://peaceful-island-09936.herokuapp.com/ordersItem/${id}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const { } = orders;
    return (
        <div className="my-5">

        </div>
    );
};

export default MyOrders;