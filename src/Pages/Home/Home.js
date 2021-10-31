import React from 'react';
import './Home.css';
import banner from '../../images/banner.jpg';
import { useState } from 'react';
import { useEffect } from 'react';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://peaceful-island-09936.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div>
                <img style={{ width: "100%", height: "90%" }} src={banner} alt="" />
            </div>
            <h1 className="my-5 text-warning">Our Top Services</h1>
            <hr style={{ width: "80%", marginLeft: "9%", }} />
            <div className="container row">
                {
                    services.map(service => <Services
                        key={service._id}
                        service={service}
                    ></Services>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;