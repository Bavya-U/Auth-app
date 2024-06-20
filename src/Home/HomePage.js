import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./HomePage.css"

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform any necessary cleanup or state reset here
        navigate('/login');
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Home</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/signup-form">Signup</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/table">Users</a>
                            </li>
                        </ul>
                        <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </nav>
            <div className="container mt-5">
                <h1>Welcome to the Home Page</h1>
            </div>
        </div>
    );
};

export default Home;
