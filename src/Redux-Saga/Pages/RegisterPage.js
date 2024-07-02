import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { registerRequest } from '../Actions/Action';
import { useNavigate } from 'react-router-dom';
import TextInput from '../../ReusableComponent/TextInput';
import SelectInput from '../../ReusableComponent/SelectInput';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const registrationError = useSelector(state => state.user?.error);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      mobileNo: '',
      password: '',
      confirmPassword: '',
      userRole: '',
    },
    validationSchema: Yup.object({
      userName: Yup.string().required('User Name is Required'),
      email: Yup.string().email('Invalid email address').required('Email is Required'),
      mobileNo: Yup.string().required('MobileNo is Required'),
      password: Yup.string().required('Password is Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is Required'),
    }),
    onSubmit: (values) => {
      dispatch(registerRequest(values, navigate));
    },
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card border-0 shadow">
            <h2 className="card-title text-center fw-bold">Register Data</h2>
            <div className="card-body py-md-4">
              <form onSubmit={formik.handleSubmit} className='reg-form'>
                <TextInput
                  id="name"
                  name="userName"
                  placeholder="Name"
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors.userName}
                  touched={formik.touched.userName}
                />
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors.email}
                  touched={formik.touched.email}
                />
                <TextInput
                  id="mobileNo"
                  name="mobileNo"
                  placeholder="Mobile Number"
                  value={formik.values.mobileNo}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors.mobileNo}
                  touched={formik.touched.mobileNo}
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
                <TextInput
                  id="confirm-password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors.confirmPassword}
                  touched={formik.touched.confirmPassword}
                  togglePassword={() => formik.setFieldValue('showConfirmPassword', !formik.values.showConfirmPassword)}
                  showPassword={formik.values.showConfirmPassword}
                />
                <SelectInput
                  id="userRole"
                  name="userRole"
                  value={formik.values.userRole}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.errors.userRole}
                  touched={formik.touched.userRole}
                  options={[
                    { value: 'USER', label: 'User' },
                    { value: 'ADMIN', label: 'Admin' }
                  ]}
                />
                {registrationError && <p style={{ color: 'red' }}>{registrationError}</p>}
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <a className="login-btn" href="/authlogin">
                    Login
                  </a>
                  <button className="Register-btn" type="submit">Create Account</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
