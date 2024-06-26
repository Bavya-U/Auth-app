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
      userName: '',
      password: '',
      showPassword: false,
    },
    validationSchema: Yup.object({
      userName: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      dispatch(loginRequest({ ...values, navigate }));
    },
  });

  return (
    <div className="">
      <form className="login" onSubmit={formik.handleSubmit}>
        <TextInput
          id="username"
          name="userName"
          placeholder="Username"
          value={formik.values.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.userName}
          touched={formik.touched.userName}
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
