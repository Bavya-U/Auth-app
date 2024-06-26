import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Home/HomePage';
import RegisterForm from './Redux-Saga/Pages/RegisterPage';
import LoginForm from './Redux-Saga/Pages/LoginPage';
import UserPage from './Redux-Saga/Pages/UserPage';
import AdminPage from './Redux-Saga/Pages/AdminPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/registerpage" element={<RegisterForm />} />
                <Route path="/authlogin" element={<LoginForm />} />
                <Route path="/usertable" element={<UserPage/>} />
                <Route path="/admintable" element={<AdminPage />} />
            </Routes>
        </Router>
    );
};

export default App;
