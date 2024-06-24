import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerRequest } from '../Actions/Action';

const RegisterForm = () => {
  const [userId, setUserId] = useState('3fa85f64-5717-4562-b3fc-2c963f66afa6');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userRole, setUserRole] = useState('ADMIN'); // Assuming default role is 'ADMIN'

  const dispatch = useDispatch();
  const registrationError = useSelector(state => state.user?.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    dispatch(registerRequest({
      userId,
      userName,
      email,
      mobileNo,
      password,
      confirmPassword,
      userRole,
    }));
  };

  return (
    <div>
      <h2>User Registration</h2>
      {registrationError && <p style={{ color: 'red' }}>{registrationError}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Name:</label>
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Mobile No:</label>
          <input type="text" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <div>
          <label>User Role:</label>
          <select value={userRole} onChange={(e) => setUserRole(e.target.value)}>
            <option value="ADMIN">Admin</option>
            <option value="USER">User</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
