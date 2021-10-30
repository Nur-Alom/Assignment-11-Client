import React from 'react';
import './AddNewService.css';
import img from '../../images/favicon.png';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post('https://peaceful-island-09936.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Congratulation!! Your Services Added Successfully')
                    reset();
                }
            })
    };

    return (
        <div className="newService-body container">
            <div className="site-branding">
                <h1>Explore-BD</h1>
                <img style={{ width: "40px" }} src={img} alt="" />
            </div>
            <hr style={{ width: "20%", marginLeft: "40%" }} />
            <strong className="fs-4">To Add a New Service Please Fill The Form Below.. </strong>
            <hr />
            <div>
                <form className="newService-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="newService-field">
                        <div className="newService-input-section">
                            <input type="url" className="newService-input" {...register("img")} placeholder="Image Link" required />
                            <br />
                            <input className="newService-input" {...register("title")} placeholder="Title" required />
                            <br />
                        </div>
                        <div className="newService-input-section">
                            <input type="number" className="newService-input" {...register("price")} placeholder="Price" required />
                            <br />
                            <input className="newService-input" {...register("shortDis")} placeholder="Description" maxLength="105" required />
                            <br />
                        </div>
                        <div className="newService-input-section">
                            <input className="newService-input" {...register("Location")} placeholder="Location" required />
                            <br />
                            <input className="newService-input" {...register("tourTime")} placeholder="Tour-Time" maxLength="105" required />
                            <br />
                        </div>
                        <input className="newService-submit" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNewService;