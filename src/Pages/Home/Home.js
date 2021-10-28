import React from 'react';
import './Home.css';
import banner from '../../images/banner.jpg';
import { useState } from 'react';
import { useEffect } from 'react';
import Services from '../Services/Services';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div>
                <img style={{ width: "100%", height: "90%" }} src={banner} alt="" />
            </div>
            <div className="container row">
                {
                    services.map(service => <Services
                        key={service.id}
                        service={service}
                    ></Services>)
                }
            </div>
        </div>
    );
};

export default Home;