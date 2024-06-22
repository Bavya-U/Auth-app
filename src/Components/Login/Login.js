import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            userName: '',
            password: ''
        },
        validationSchema: Yup.object({
            userName: Yup.string().required('Username is required'),
            password: Yup.string().required('Password is required')
        }),
        onSubmit: async (values) => {
            try {
                const loginResponse = await axios.post('http://localhost:8080/api/auth/user/login', values);
                console.log(loginResponse.data);
                navigate('/home');
            } catch (err) {
                console.error(err.response.data);
                alert('Login failed.');
            }
        },
    });

    return (
        <div className=''>
            <form className="login" onSubmit={formik.handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="userName"
                        value={formik.values.userName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Username"
                    />
                    {formik.touched.userName && formik.errors.userName ? (
                        <div className="error">{formik.errors.userName}</div>
                    ) : null}
                </div>
                <div className='password-container'>
                    <input
                        type={formik.values.showPassword ? "text" : "password"}
                        className='password-container'
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Password"
                    />
                    <span
                        className="toggle-password"
                        onClick={() => formik.setFieldValue('showPassword', !formik.values.showPassword)}
                    >
                        {formik.values.showPassword ? '🙈' : '👁️'}
                    </span>
                    {formik.touched.password && formik.errors.password ? (
                        <div className="error">{formik.errors.password}</div>
                    ) : null}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
        
    );
};

export default Login;
