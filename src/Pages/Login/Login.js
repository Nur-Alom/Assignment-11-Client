import React from 'react';
import './Login.css';
import imgGoogle from '../../images/imageedit_google.png';
import useAuth from '../../Hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
    const { GoogleLogin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const redirect = location.state?.from || './home';

    const handleLogin = () => {
        GoogleLogin()
            .then((result) => {
                navigate(redirect)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div>
            <div className="login-home">
                <div className="section">
                    <h2 style={{ marginBottom: "25px" }}>Login With</h2>
                    <button onClick={handleLogin} className="google-btn"><img className="google-img" src={imgGoogle} alt="" />Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;