import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Home/HomePage";
import RegisterForm from "./Redux-Saga/Pages/RegisterPage";
import LoginForm from "./Redux-Saga/Pages/LoginPage";
// import UserPage from './Redux-Saga/Pages/UserPage';
// import AdminPage from './Redux-Saga/Pages/AdminPage';
import AdminTable from "./Admin/AdminPages/AdminTable";
import UserTable from "./User/UserTable";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/registerpage" element={<RegisterForm />} />
        <Route path="/authlogin" element={<LoginForm />} />
        <Route path="/admintables/:useremail" element={<AdminTable />} />
        <Route path="usertable" element={<UserTable />} />
      </Routes>
    </Router>
  );
};

export default App;
