import React from 'react';
import './Services.css';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Services = (props) => {
    const { _id, shortDis, img, title, price, Location } = props.service;


    return (
        <div className="col-md-4 my-3 me-0">
            <Card className="" style={{ width: '20rem', height: "36rem" }}>
                <Card.Img variant="top" style={{ height: '250px' }} src={img} />
                <Card.Body>
                    <Card.Title><span className="fw-bold"></span> {title}</Card.Title>
                    <Card.Text><span className="fw-bold">Price:</span> {price}</Card.Text>
                    <Card.Text><span className="fw-bold">Location:</span> {Location}</Card.Text>
                    <hr />
                    <Card.Text>{shortDis}</Card.Text>
                    <hr />
                    <div className="my-2">
                        <NavLink to={`/pack/${_id}`} className="detail-btn rounded-pill">BookNow</NavLink>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Services;