import React from 'react';
import './AddNewService.css';
import img from '../../images/favicon.png';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        const formData = new FormData();
        formData.append('image', data.img[0])
        formData.append('location', data.Location)
        formData.append('title', data.title)
        formData.append('price', data.price)
        formData.append('tTime', data.tourTime)
        formData.append('dis', data.shortDis)
        axios.post('http://localhost:5000/services', formData)
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
            <hr className="hr" style={{ width: "30%", marginLeft: "35%" }} />
            <strong className="fs-4">To Add a New Service Please Fill The Form Below.. </strong>
            <hr />
            <div>
                <form className="newService-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="newService-field">
                        <div className="newService-input-section">
                            <input className="newService-input" {...register("title")} placeholder="Title" required />
                            <br />
                            <input type="number" className="newService-input" {...register("price")} placeholder="Price" required />
                            <br />
                        </div>
                        <div className="newService-input-section">
                            <input className="newService-input" {...register("shortDis")} placeholder="Description" maxLength="105" required />
                            <br />
                            <input className="newService-input" {...register("Location")} placeholder="Location" required />
                            <br />
                        </div>
                        <div className="newService-input-section">
                            <input className="newService-input" {...register("tourTime")} placeholder="Tour-Time" maxLength="105" required />
                            <br />
                            <input type="file" className="newService-input" {...register("img")} placeholder="Image Link" required />
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