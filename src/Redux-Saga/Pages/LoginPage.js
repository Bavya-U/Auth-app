import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginRequest } from '../LoginAction/LoginAction';
import { useNavigate } from 'react-router-dom';
import TextInput from '../../ReusableComponent/TextInput';

const LoginForm = () => {
  const dispatch = useDispatch();
  const loginError = useSelector(state => state.auth?.error);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/registerpage'); 
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      showPassword: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().required('email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      dispatch(loginRequest({ ...values, navigate }));
    },
  });

  return (
    <div className="">
      
      <form className="login shadow-lg" onSubmit={formik.handleSubmit}>
      <h3 className='text-center m-0 p-0 fw-bold login-title'>Login</h3>
        <TextInput
          id="email"
          name="email"
          placeholder="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email}
          touched={formik.touched.email}
        />
        <TextInput
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.password}
          touched={formik.touched.password}
          togglePassword={() => formik.setFieldValue('showPassword', !formik.values.showPassword)}
          showPassword={formik.values.showPassword}
        />
        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
<div className="d-flex justify-content-between">
      <button type="submit" className="submit">Login</button>
      <div className="d-flex justify-content-end">
        <button className="back" onClick={handleClick}>Back</button>
      </div>
    </div>
      </form>
    </div>
  );
};

export default LoginForm;
