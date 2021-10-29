import React from 'react';
import './PlaceOrder.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const { packId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${packId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    const { img, title, price, tourTime, Location } = service;

    return (
        <div className="orders-body container">
            <div className="d-flex align-items-center">
                <img style={{ width: "300px" }} src={img} alt="" />
                <div className="pack-details">
                    <h2>{title}</h2>
                    <br />
                    <strong>Price: {price}</strong>
                    <br />
                    <strong>Tour-Time: {tourTime}</strong>
                    <br />
                    <p><strong>Tour-Location: </strong>{Location}</p>
                </div>
            </div>
            <div>
                <h1>Hello boys</h1>
            </div>
        </div>
    );
};

export default PlaceOrder;