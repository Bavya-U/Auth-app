import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  fetchUserRequest,
  editUserRequest,
  deleteUserRequest
} from '../action/authAction';

const UserTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    userName: '',
    userEmail: '',
    mobileNo: '',
    status: '',
  });

  useEffect(() => {
    dispatch(fetchUserRequest());
  }, [dispatch]);

  useEffect(() => {
    if (user && user.Details) {
      setFormData({
        id: user.Details.id,
        userName: user.Details.userName,
        userEmail: user.Details.userEmail,
        mobileNo: user.Details.mobileNo,
        status: user.Details.status,
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
    dispatch(editUserRequest(formData));
    setIsEditing(false);
  };

  const handleDelete = () => {
    const userEmail = localStorage.getItem('username');
    dispatch(deleteUserRequest(userEmail));
    navigate('/login');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="container tab-style">
      {user && user.Details ? (
        <div>
          <h2>User Profile</h2>
          {isEditing ? (
            <div>
              <label>
                User Name:
                <input
                  className="form-control"
                  type="text"
                  name="userEmail"
                  value={formData.useremail}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Email:
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Mobile Number:
                <input
                  className="form-control"
                  type="text"
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Status:
                <input
                  className="form-control"
                  type="text"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                />
              </label>
              <button className="btn btn-primary" onClick={handleEdit}>Save</button>
              <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          ) : (
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Mobile Number</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {/* {/ <td>{user.Details.useremail}</td> /} */}
                    <td>{user.Details.userEmail}</td>
                    <td>{user.Details.mobileNo}</td>
                    <td>{user.Details.status}</td>
                    <td>
                      <button className="btn btn-primary" onClick={() => setIsEditing(true)}>Edit</button>
                      <button className="btn btn-danger ms-2" onClick={handleDelete}>Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : (
        <p>Deleted...</p>
      )}
    </div>
  );
};

export default UserTable;
