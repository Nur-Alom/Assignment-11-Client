import React from 'react';
import './PlaceOrder.css';
import { useForm } from "react-hook-form";
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';

const PlaceOrder = () => {
    const { users } = useAuth();
    const { packId } = useParams();
    const [service, setService] = useState({});
    const location = useLocation();
    const history = useHistory();

    const redirect = location.state || '/home';

    // Load Single Data.
    useEffect(() => {
        fetch(`https://peaceful-island-09936.herokuapp.com/services/${packId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);


    // React Hook Form for sent data ui to database.
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://peaceful-island-09936.herokuapp.com/ordersItem', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Congratulation!! Your Order Place Successfully')
                    history.push(redirect);
                }
            })
    };

    const { img, title, price, tourTime, Location } = service;

    return (
        <div className="orders-body">
            <div className="d-flex align-items-center flex-column item-detail">
                <img style={{ width: "600px" }} src={img} alt="" />
                <div className="pack-details">
                    <h2>{title}</h2>
                    <br />
                    <strong>Price: {price}</strong> required
                    <br />
                    <strong>Tour-Time: {tourTime}</strong>
                    <br />
                    <p><strong>Tour-Location: </strong>{Location}</p>
                </div>
            </div>
            <div className="customer-info">
                <form onSubmit={handleSubmit(onSubmit)} className="input-form">
                    <h4 className="my-4">Fill This Form Please</h4>
                    <hr />
                    <input value={packId} className="register-input" type="text" {...register("packKey")} required />
                    <br />
                    <input value={title} className="register-input" type="text" {...register("packTitle")} required />
                    <br />
                    <input value={users.displayName} className="register-input" {...register("name")} required />
                    <br />
                    <input value={users.email} className="register-input" {...register("email")} required />
                    <br />
                    <input className="register-input" type="number" {...register("number")} placeholder="Number" required />
                    <br />
                    <input className="register-input" type="text" {...register("address")} placeholder="Address" required />

                    <br />
                    <input className="register-submit" type="submit" value="Order Place" />
                </form>
            </div>
        </div>
    );
};

export default PlaceOrder;