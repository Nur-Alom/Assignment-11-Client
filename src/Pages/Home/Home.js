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
                <img className="banner-img" style={{ width: "100%", marginTop: "4%" }} src={banner} alt="" />
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
                <hr />
            </div>
            <div>
                <h1 className="text-warning">Why Choose ExploreBD</h1>
                <hr style={{ width: "50%", marginLeft: "25%", }} />
                <div className="row">
                    <article className="col-md-4">
                        <h2>TINY GROUPS</h2>
                        <p>Personalized experience on every tour with us. 5 Travelers per group maximum. Private tours are also available.</p>
                    </article>
                    <article className="col-md-4">
                        <h2>LOWER PRICE</h2>
                        <p>Compared to any of your home operators. Book directly and cut the middleman. Save money, travel more.</p>
                    </article>
                    <article className="col-md-4">
                        <h2>SCHEDULED TOURS</h2>
                        <p>Regularly scheduled tours. Suitable for solo travelers to join and reduce cost. Single Supplement also available.</p>
                    </article>
                    <article className="col-md-4">
                        <h2>HIGHEST QUALITY</h2>
                        <p>350+ reviews and 5/5 rating on TripAdvisor. Awarded Certificate of Excellence in 2015, 2016, 2017, 2018 and 2019 consecutively.</p>
                    </article>
                    <article className="col-md-4">
                        <h2>LOCAL EXPERIENCE</h2>
                        <p>Experienced local guides with vast local knowledge. Have an authentic local experience focusing on people and culture.</p>
                    </article>
                    <article className="col-md-4">
                        <h2>LOCAL COMPANY</h2>
                        <p>100% Of your money spent goes directly to the locals. No commission to the foreign agencies online or offline.</p>
                    </article>
                </div>
            </div>
            <div className="container">
                <div className="" style={{ backgroundColor: "blue", color: "white", padding: "50px", marginBottom: "100px", borderRadius: "20px", marginLeft: "10px" }}>
                    <h2>Join "Let's Go To Bangladesh" Group!</h2>
                    <p>Stay updated about Bangladesh, see stunning photos of Bangladesh, meet numerous travelers from around the world who have already visited Bangladesh, and ask Bangladesh travel questions. </p>
                    <button style={{ backgroundColor: "orange", border: "0px", padding: "5px 20px", borderRadius: "10px", color: "white" }}>Join Now</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;