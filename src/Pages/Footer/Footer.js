import React from 'react';
import img from '../../images/favicon.png';

const Footer = () => {
    return (
        <div className="bg-dark text-white py-4">
            <h1>Explore-BD <img style={{ width: "50px", paddingBottom: "5px" }} src={img} alt="" /></h1>
            <p>All Rights Reserved. Explore-BD Ltd ©2021.</p>
        </div>
    );
};

export default Footer;