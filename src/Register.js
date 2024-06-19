import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    userName: "",
    email: "",
    mobileNo: "",
    password: "",
    confirmPassword: "",
    userRole: "ADMIN",
  });

  const { userName, email, mobileNo, password, confirmPassword } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      try {
        const res = await axios.post(
          "http://localhost:8080/api/auth/user/register",
          formData
        );
        console.log(res.data);
        alert("Registration successful!");
      } catch (err) {
        console.error(err.response.data);
        alert("Registration failed.");
      }
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input type="text" name="userId" value={userId} onChange={e => onChange(e)} placeholder="User ID" required />
      <input
        type="text"
        name="userName"
        value={userName}
        onChange={(e) => onChange(e)}
        placeholder="Username"
        required
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => onChange(e)}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="mobileNo"
        value={mobileNo}
        onChange={(e) => onChange(e)}
        placeholder="Mobile Number"
        required
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => onChange(e)}
        placeholder="Password"
        required
      />
      <input
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e) => onChange(e)}
        placeholder="Confirm Password"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
