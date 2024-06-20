import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    const [formData, setFormData] = useState({
        userName: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const { userName, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e?.preventDefault();

        try {
            const loginResponse = await axios.post('http://localhost:8080/api/auth/user/login', formData);
            console.log(loginResponse.data);
            navigate('/home');
        } catch (err) {
            console.error(err.response.data);
            alert('Login failed.');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className=''>
            <form className="login" onSubmit={onSubmit}>
                <div>
                <input 
                    type="text" 
                    name="userName" 
                    value={userName} 
                    onChange={onChange} 
                    placeholder="Username"
                />
                </div>
                <div className='password-container'>
                    <input 
                    type={showPassword ? "text" : "password"}
                    className='password-container'
                        name="password" 
                        value={password} 
                        onChange={onChange} 
                        placeholder="Password"
                        
                    />
                   
                   <span 
                        className="toggle-password" 
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? '🙈' : '👁️'}
                    </span>
                    </div>
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;
