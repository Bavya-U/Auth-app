import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserRequest, updateUserRequest, deleteUserRequest } from '../Redux-Saga/LoginAction/LoginAction';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';          
import 'primeicons/primeicons.css';
import "../App.css"
import {useNavigate} from "react-router-dom"

const UserTable = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);
  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    userId: '',
    userName: '',
    email: '',
    mobileNo: '',
    status: '',
    userRole: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    const useremail = localStorage.getItem('email');
    if (useremail) {
      dispatch(fetchUserRequest(useremail));
    }
  }, [dispatch]);

  useEffect(() => {
    if (user && user.Details) {
      setFormData({
        password: user.Details.password,
        confirmPassword: user.Details.confirmPassword,
        userId: user.Details.userId,
        userName: user.Details.userName,
        email: user.Details.email,
        mobileNo: user.Details.mobileNo,
        status: user.Details.status,
        userRole: user.Details.userRole,
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEdit = () => {
    dispatch(updateUserRequest(formData));
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    const useremail = localStorage.getItem('email');
    if (useremail) {
      dispatch(deleteUserRequest(useremail));
      localStorage.removeItem('email');
      // window.location.reload();
      // navigate
    }
    alert("confirom delete")
    navigate("/authlogin")
  };

  const handleEditClick = (useremail) => {
    dispatch(fetchUserRequest(useremail));
    setIsEditing(true);
  };

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>User Profile</h2>
          {isEditing ? (
              <div className="p-fluid p-formgrid p-grid container card p-4 w-50">
                <div className='d-flex align-'>
              <div className="p-field p-col-12 p-md-6  col-md-5 m-2">
                <label htmlFor="userName">User Name</label>
                <InputText
                  id="userName"
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="p-field p-col-12 p-md-6  col-md-5 m-2">
                <label htmlFor="email">Email</label>
                <InputText
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                  </div>
                </div>
                <div className='d-flex'>
              <div className="p-field p-col-12 p-md-6  col-md-5 m-2">
                <label htmlFor="mobileNo">Mobile Number</label>
                <InputText
                  id="mobileNo"
                  type="text"
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleInputChange}
                />
              </div>
              <div className="p-field p-col-12 p-md-6  col-md-5 m-2">
                <label htmlFor="status">Status</label>
                <InputText
                  id="status"
                  type="text"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                />
                  </div>
                  </div>
                  <div className='d-flex'>
              <div className="p-field p-col-12 p-md-6  col-md-5 m-2">
                <label htmlFor="password">Password</label>
                <InputText
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="p-field p-col-12 p-md-6  col-md-5 m-2">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <InputText
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                  </div>
                  </div>
                <div className="p-field d-flex p-col-12">
                  <div className='col-md-4 m-2 justify-content-start'>
                    <Button label="Save" onClick={handleEdit} />
                  </div>
                  <div className='col-md-4 m-2 justify-content-start'>
                <Button
                  label="Cancel"
                  className="p-button-secondary"
                  onClick={() => setIsEditing(false)}
                    />
                    </div>
              </div>
            </div>
          ) : (
            <div className='text-center'>
              <DataTable value={[formData]}  className='text-center'>
                <Column className='text-center' field="userName" header="User Name" />
                <Column className='text-center' field="email" header="Email" />
                <Column className='text-center' field="mobileNo" header="Mobile Number" />
                <Column className='text-center' field="status" header="Status" />
                <Column className='text-center'
                  header="Actions"
                  body={() => (
                    <div>
                      <Button
                        label="Edit"
                        className="p-button-primary m-1"
                        onClick={() => handleEditClick(formData.email)}
                      />
                      <Button
                        label="Delete"
                        className="p-button-danger m-1"
                        onClick={handleDeleteClick}
                      />
                    </div>
                  )}
                />
              </DataTable>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserTable;
