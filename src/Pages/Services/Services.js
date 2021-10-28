import React from 'react';
import './Services.css';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Services = (props) => {
    const { id, shortDis, img, title, price } = props.service


    return (
        <div className="col-md-4 my-3">
            <Card className="" style={{ width: '20rem', height: "36rem" }}>
                <Card.Img variant="top" style={{ height: '250px' }} src={img} />
                <Card.Body>
                    <Card.Title><span className="fw-bold"></span> {title}</Card.Title>
                    <Card.Text><span className="fw-bold">Price:</span> {price}</Card.Text>
                    <hr />
                    <Card.Text>{shortDis}</Card.Text>
                    <hr />
                    <div className="my-2">
                        <NavLink to="/" className="enroll-btn rounded-pill">Enroll Now</NavLink>
                        <NavLink to={`/class/${id}`} className="detail-btn rounded-pill">More..</NavLink>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Services;