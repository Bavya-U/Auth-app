import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      userName: "",
      email: "",
      mobileNo: "",
      password: "",
      confirmPassword: "",
      userRole: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Enter UserName"),
      email: Yup.string().email("Invalid email address").required("Enter Email"),
      mobileNo: Yup.string()
        .matches(/^[0-9]{10}$/, "Invalid mobile number")
        .required("Enter Mobile Number"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Enter Password"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passwords must match")
        .required("Enter ConfirmPassWord"),
      userRole: Yup.string().required("Select UserRole"),
    }),
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:8080/api/auth/user/register", values);
        alert("Registration successful!");
        navigate("/login");
      } catch (err) {
        console.error(err.response.data);
        alert("Registration failed.");
      }
    },
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card border-0 shadow">
            <h2 className="card-title text-center fw-bold">Register</h2>
            <div className="card-body py-md-4">
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    name="userName"
                    value={formik.values.userName} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.userName && formik.errors.userName ? (
                    <div className="error">{formik.errors.userName}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formik.values.email} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="mobileNo"
                    name="mobileNo"
                    placeholder="Mobile Number"
                    value={formik.values.mobileNo} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.mobileNo && formik.errors.mobileNo ? (
                    <div className="error">{formik.errors.mobileNo}</div>
                  ) : null}
                </div>
                <div className="form-group position-relative">
                  <input
                    type={formik.values.showPassword ? "text" : "password"}
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={formik.values.password} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                  />
                  <span
                    className="toggle-password"
                    onClick={() =>
                      formik.setFieldValue('showPassword', !formik.values.showPassword)
                    }
                    style={{ position: 'absolute', right: '10px', top: '19px', cursor: 'pointer' }}
                  >
                    {formik.values.showPassword ? '🙈' : '👁️'}
                  </span>
                  {formik.touched.password && formik.errors.password ? (
                    <div className="error">{formik.errors.password}</div>
                  ) : null}
                </div>
                <div className="form-group position-relative">
                  <input
                    type={formik.values.showConfirmPassword ? "text" : "password"}
                    className="form-control"
                    id="confirm-password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formik.values.confirmPassword} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                  />
                  <span
                    className="toggle-password"
                    onClick={() =>
                      formik.setFieldValue('showConfirmPassword', !formik.values.showConfirmPassword)
                    }
                    style={{ position: 'absolute', right: '10px', top: '19px', cursor: 'pointer' }}
                  >
                    {formik.values.showConfirmPassword ? '🙈' : '👁️'}
                  </span>
                  {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div className="error">{formik.errors.confirmPassword}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <select
                    className="form-control"
                    id="userRole"
                    name="userRole"
                    value={formik.values.userRole} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                  >
                    <option value="" disabled>Select Role</option>
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                  </select>
                  {formik.touched.userRole && formik.errors.userRole ? (
                    <div className="error">{formik.errors.userRole}</div>
                  ) : null}
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <a className="login-btn" href="./login">
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

export default Register;
