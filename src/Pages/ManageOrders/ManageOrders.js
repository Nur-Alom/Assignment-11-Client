import React from 'react';
import './ManageOrders.css';

const ManageOrders = () => {
    return (
        <div className="my-5">
            <div className="myOrders-body">
                <div className="container section-body">
                    <ul className="order-item">
                        <li>Name <i className="fas fa-arrow-down"></i></li>
                        <li>someone</li>
                    </ul>
                    <ul className="order-item">
                        <li>Email <i className="fas fa-arrow-down"></i></li>
                        <li>someone</li>
                    </ul>
                    <ul className="order-item">
                        <li>Package <i className="fas fa-arrow-down"></i></li>
                        <li>Khulna</li>
                    </ul>
                    <ul className="order-item">
                        <li>Action <i className="fas fa-arrow-down"></i></li>
                        <li>Delete</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;