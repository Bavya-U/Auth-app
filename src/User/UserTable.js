// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   fetchUserRequest,
//   updateUserRequest,
//   deleteUserRequest,
// } from "../Redux-Saga/LoginAction/LoginAction";

// const UserTable = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.auth.user);
//   const loading = useSelector((state) => state.auth.loading);

//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     userId: "",
//     userName: "",
//     email: "",
//     mobileNo: "",
//     status: "",
//     userRole: "",
//     password: "",
//     confirmPassword: "",
//   });

//   useEffect(() => {
//     const useremail = localStorage.getItem("email");
//     if (useremail) {
//       dispatch(fetchUserRequest(useremail));
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     if (user && user.Details) {
//       setFormData({
//         password: user.Details.password,
//         confirmPassword: user.Details.confirmPassword,
//         userId: user.Details.userId,
//         userName: user.Details.userName,
//         email: user.Details.email,
//         mobileNo: user.Details.mobileNo,
//         status: user.Details.status,
//         userRole: user.Details.userRole,
//       });
//     }
//   }, [user]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleEdit = () => {
//     dispatch(updateUserRequest(formData));
//     setIsEditing(false);
//   };

//   const handleDeleteClick = () => {
//     const useremail = localStorage.getItem("email");
//     if (useremail) {
//       dispatch(deleteUserRequest(useremail));
//       localStorage.removeItem("email");
//       window.location.reload();
//     }
//   };

//   const handleEditClick = (useremail) => {
//     dispatch(fetchUserRequest(useremail));
//     setIsEditing(true);
//   };

//   return (
//     <div className="container tab-style">
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           <h2>User Profile</h2>
//           {isEditing ? (
//             <div>
//               <label>
//                 User Name:
//                 <input
//                   className="form-control"
//                   type="text"
//                   name="userName"
//                   value={formData.userName}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Email:
//                 <input
//                   className="form-control"
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Mobile Number:
//                 <input
//                   className="form-control"
//                   type="text"
//                   name="mobileNo"
//                   value={formData.mobileNo}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Status:
//                 <input
//                   className="form-control"
//                   type="text"
//                   name="status"
//                   value={formData.status}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Password:
//                 <input
//                   className="form-control"
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Confirm Password:
//                 <input
//                   className="form-control"
//                   type="password"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleInputChange}
//                 />
//               </label>

//               <button className="btn btn-primary" onClick={handleEdit}>
//                 Save
//               </button>
//               <button
//                 className="btn btn-secondary"
//                 onClick={() => setIsEditing(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           ) : (
//             <div>
//               <table className="table">
//                 <thead>
//                   <tr>
//                     <th>User Name</th>
//                     <th>Email</th>
//                     <th>Mobile Number</th>
//                     <th>Status</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>{formData.userName}</td>
//                     <td>{formData.email}</td>
//                     <td>{formData.mobileNo}</td>
//                     <td>{formData.status}</td>
//                     <td>
//                       <button
//                         className="btn btn-primary"
//                         onClick={() => handleEditClick(formData.email)}
//                       >
//                         Edit
//                       </button>
//                       <button
//                         className="btn btn-danger"
//                         onClick={handleDeleteClick}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserTable;



// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   fetchUserRequest,
//   updateUserRequest,
//   deleteUserRequest,
// } from "../Redux-Saga/LoginAction/LoginAction";

// const UserTable = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.auth.user);
//   const loading = useSelector((state) => state.auth.loading);

//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     userId: "",
//     userName: "",
//     email: "",
//     mobileNo: "",
//     status: "",
//     userRole: "",
//     password: "",
//     confirmPassword: "",
//   });

//   useEffect(() => {
//     const useremail = localStorage.getItem("email");
//     if (useremail) {
//       dispatch(fetchUserRequest(useremail));
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     if (user && user.Details) {
//       setFormData({
//         password: user.Details.password,
//         confirmPassword: user.Details.confirmPassword,
//         userId: user.Details.userId,
//         userName: user.Details.userName,
//         email: user.Details.email,
//         mobileNo: user.Details.mobileNo,
//         status: user.Details.status,
//         userRole: user.Details.userRole,
//       });
//     }
//   }, [user]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleEdit = () => {
//     dispatch(updateUserRequest(formData));
//     setIsEditing(false);
//   };

//   const handleDeleteClick = () => {
//     const useremail = localStorage.getItem("email");
//     if (useremail) {
//       dispatch(deleteUserRequest(useremail));
//       localStorage.removeItem("email");
//       window.location.reload();
//     }
//   };

//   const handleEditClick = (useremail) => {
//     dispatch(fetchUserRequest(useremail));
//     setIsEditing(true);
//   };

//   return (
//     <div className="container mt-4">
//       {loading ? (
//         <div className="d-flex justify-content-center">
//           <div className="spinner-border text-primary" role="status">
//             <span className="sr-only">Loading...</span>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <h2 className="mb-4">User Profile</h2>
//           {isEditing ? (
//             <div className="container card shadow w-50">
//               <form>
//                 <div className="form-group w-50">
//                   <label>User Name:</label>
//                   <input
//                     className="form-control"
//                     type="text"
//                     name="userName"
//                     value={formData.userName}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Email:</label>
//                   <input
//                     className="form-control"
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Mobile Number:</label>
//                   <input
//                     className="form-control"
//                     type="text"
//                     name="mobileNo"
//                     value={formData.mobileNo}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Status:</label>
//                   <input
//                     className="form-control"
//                     type="text"
//                     name="status"
//                     value={formData.status}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Password:</label>
//                   <input
//                     className="form-control"
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Confirm Password:</label>
//                   <input
//                     className="form-control"
//                     type="password"
//                     name="confirmPassword"
//                     value={formData.confirmPassword}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <button className="btn btn-primary mr-2" onClick={handleEdit}>
//                   Save
//                 </button>
//                 <button
//                   className="btn btn-secondary"
//                   onClick={() => setIsEditing(false)}
//                 >
//                   Cancel
//                 </button>
//               </form>
//             </div>
//           ) : (
//             <div>
//               <table className="table table-striped">
//                 <thead>
//                   <tr>
//                     <th>User Name</th>
//                     <th>Email</th>
//                     <th>Mobile Number</th>
//                     <th>Status</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>{formData.userName}</td>
//                     <td>{formData.email}</td>
//                     <td>{formData.mobileNo}</td>
//                     <td>{formData.status}</td>
//                     <td>
//                       <button
//                         className="btn btn-primary mr-2"
//                         onClick={() => handleEditClick(formData.email)}
//                       >
//                         Edit
//                       </button>
//                       <button
//                         className="btn btn-danger"
//                         onClick={handleDeleteClick}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserTable;



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

const UserTable = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);

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
      window.location.reload();
    }
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
