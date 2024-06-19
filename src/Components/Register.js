import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        userId: '',
        userName: '',
        email: '',
        mobileNo: '',
        password: '',
        confirmPassword: '',
        userRole: 'ADMIN'
    });

    const { userName, email, mobileNo, password, confirmPassword } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
        } else {
            try {
                const res = await axios.post('http://localhost:8080/api/auth/user/register', formData);
                console.log(res.data);
                alert('Registration successful!');
            } catch (err) {
                console.error(err.response.data);
                alert('Registration failed.');
            }
        }
    };

    return (
        <div className="container shadow p-5 mt-5">
            <form onSubmit={onSubmit}>
                <div></div>
                <div className="form-group">
                    <label htmlFor="userName">Username</label>
                    <input type="text" className="form-control" id="userName" name="userName" value={userName} onChange={onChange} placeholder="Username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="mobileNo">Mobile Number</label>
                    <input type="text" className="form-control" id="mobileNo" name="mobileNo" value={mobileNo} onChange={onChange} placeholder="Mobile Number" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={onChange} placeholder="Confirm Password" required />
                </div>
                <div className='mt-3 d-flex justify-content-center'>
                    <button type="submit" className="btn btn-primary">Register</button>
                    </div>
            </form>
        </div>
    );
};

export default Register;
