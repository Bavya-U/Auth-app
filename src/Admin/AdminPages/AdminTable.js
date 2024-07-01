import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllDataRequest,
  deleteUserRequest,
} from "../../Redux-Saga/LoginAction/LoginAction";

const UserTable = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users || []);
  const loading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    dispatch(fetchAllDataRequest());
  }, [dispatch]);

  const handleDeleteClick = (useremail) => {
    dispatch(deleteUserRequest(useremail));
  };

  return (
    <div className="container tab-style">
      {loading ? (
        <p>Loading...</p>
      ) : (
          <div>
          <h1>Admin Table</h1>
            
          <table className="table">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Email</th>
                <th>Mobile Number</th>
                <th>Status</th>
                <th>User Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.userId}>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>{user.mobileNo}</td>
                  <td>{user.status}</td>
                  <td>{user.userRole}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteClick(user.email)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserTable;
