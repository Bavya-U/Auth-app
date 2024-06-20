import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    userName: "",
    email: "",
    mobileNo: "",
    password: "",
    confirmPassword: "",
    userRole: "",
  });

  const { userName, email, mobileNo, password, confirmPassword, userRole } = formData;
  const navigate = useNavigate();

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      try {
        await axios.post("http://localhost:8080/api/auth/user/register", formData);
        alert("Registration successful! Redirecting to login...");
        navigate("/login");
      } catch (err) {
        console.error(err.response.data);
        alert("Registration failed.");
      }
    }
  };

  const togglePassword = (inputId) => {
    const input = document.getElementById(inputId);
    const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type', type);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card border-0 shadow">
            <h2 className="card-title text-center fw-bold">Register</h2>
            <div className="card-body py-md-4">
              <form _lpchecked="1" onSubmit={onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    name="userName"
                    value={userName}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="mobileNo"
                    name="mobileNo"
                    value={mobileNo}
                    onChange={onChange}
                    placeholder="Mobile Number"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    placeholder="Password"
                  />
                  <span
                    className="toggle-password"
                    onClick={() => togglePassword('password')}
                  >
                    &#128065;
                  </span>
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="confirm-password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={onChange}
                    placeholder="Confirm Password"
                  />
                  <span
                    className="toggle-password"
                    onClick={() => togglePassword('confirm-password')}
                  >
                    &#128065;
                  </span>
                </div>
                <div className="form-group">
                  <select
                    className="form-control"
                    id="userRole"
                    name="userRole"
                    value={userRole}
                    onChange={onChange}
                    required
                  >
                    <option value="" disabled>Select Role</option>
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                  </select>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <a className="login-btn" href="./login">
                    Login
                  </a>
                  <button className="Register-btn">Create Account</button>
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
