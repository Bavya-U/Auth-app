import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserRequest, updateUserRequest } from "../../Redux-Saga/LoginAction/LoginAction";

const UserTable = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    userName: "",
    email: "",
    mobileNo: "",
    status: "",
  });

  useEffect(() => {
    const useremail = localStorage.getItem("email");
    if (useremail) {
      dispatch(fetchUserRequest(useremail));
    }
  }, [dispatch]);

  useEffect(() => {
    if (user && user.Details) {
      setFormData({
        id: user.Details.id,
        userName: user.Details.userName,
        email: user.Details.email,
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
    dispatch(updateUserRequest(formData)); 
    setIsEditing(false);
  };
  return (
    <div className="container tab-style">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>User Profile</h2>
          {isEditing ? (
            <div>
              <label>
                User Name:
                <input
                  className="form-control"
                  type="text"
                  name="userName"
                  value={formData.userName}
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
              <button className="btn btn-primary" onClick={handleEdit}>
                Save
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
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
                    <td>{formData.userName}</td>
                    <td>{formData.email}</td>
                    <td>{formData.mobileNo}</td>
                    <td>{formData.status}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => setIsEditing(true)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserTable;
