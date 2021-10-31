import React from 'react';
import './Login.css';
import imgGoogle from '../../images/imageedit_google.png';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { GoogleLogin } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || './home';

    const handleLogin = () => {
        GoogleLogin()
            .then((result) => {
                history.push(redirect)
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