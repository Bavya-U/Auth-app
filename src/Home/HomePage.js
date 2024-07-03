// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import "../Home/RegHome.css"

// const Home = () => {
//   const navigate = useNavigate();

//   const handleRegisterClick = () => {
//     navigate('/registerpage'); // Navigate to the register page
//   };

//   return (
//     <div className="landing-page">
//       <button className="register-button" onClick={handleRegisterClick}>
//         Register Now
//       </button>
//     </div>
//   );
// };

// export default Home;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Home/RegHome.css";

const Home = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/registerpage'); 
  };

  return (
    <div className="landing-page">
      <div className=" shadow-lg p-5 right-content">
        <h1>Register Employee</h1>
        <p>Click the button below to register a new employee.</p>
        <button className="register-button" onClick={handleRegisterClick}>
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Home;
