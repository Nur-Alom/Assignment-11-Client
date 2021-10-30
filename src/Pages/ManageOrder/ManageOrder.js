import React from 'react';

const ManageOrder = (props) => {

    const handleDelete = (id) => {
        const url = `https://peaceful-island-09936.herokuapp.com/ordersItem/${id}`
        fetch(url, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Delete Order Successfully!!');
                }
            })
    }

    const { _id, name, email, packKey } = props.order
    return (
        <div className="">
            <div className="container section-body">
                <ul className="order-item">
                    <li className="text-success">{name}</li>
                </ul>
                <ul className="order-item">
                    <li className="text-success">{email}</li>
                </ul>
                <ul className="order-item">
                    <li className="text-success">Id: {packKey}</li>
                </ul>
                <ul className="order-item">
                    <li><button onClick={() => handleDelete(_id)} className="delete-btn">Delete <i className="fas fa-trash-alt"></i></button></li>
                </ul>
            </div>
        </div>
    );
};

export default ManageOrder;