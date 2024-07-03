import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllDataRequest, deleteUserRequest } from "../../Redux-Saga/LoginAction/LoginAction";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const UserTable = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users || []);
  const loading = useSelector((state) => state.auth.loading);
  const [globalFilter, setGlobalFilter] = useState("");

  useEffect(() => {
    dispatch(fetchAllDataRequest());
  }, [dispatch]);

  const handleDeleteClick = (useremail) => {
    dispatch(deleteUserRequest(useremail));
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <button
        className="p-button p-component p-button-danger"
        onClick={() => handleDeleteClick(rowData.email)}
      >
        <span className="p-button-icon p-c pi pi-trash me-1"></span>
        <span className="p-button-label p-c ms-1">Delete</span>
      </button>
    );
  };

  return (
    <div className="container tab-style">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Admin Table</h1>
          <div className="p-inputgroup" style={{ marginBottom: '20px' }}>
            <span className="p-inputgroup-addon">
              <i className="pi pi-search"></i>
            </span>
            <InputText 
              type="search" 
              className=""
              value={globalFilter} 
              onChange={(e) => setGlobalFilter(e.target.value)} 
              placeholder="Global Search" 
            />
          </div>
          <DataTable 
            value={users} 
            globalFilter={globalFilter} 
            paginator 
            rows={4} 
            className="p-datatable-sm text-center shadow-lg"
            emptyMessage="No users found."
          >
            <Column field="userName" className='text-center' header="User Name" sortable></Column>
            <Column field="email" className='text-center' header="Email" sortable></Column>
            <Column field="mobileNo" className='text-center' header="Mobile Number" sortable></Column>
            <Column field="status" className='text-center' header="Status" sortable></Column>
            <Column field="userRole" className='text-center' header="User Role" sortable></Column>
            <Column body={actionBodyTemplate} className="text-center" header="Actions"></Column>
          </DataTable>
        </div>
      )}
    </div>
  );
};

export default UserTable;
