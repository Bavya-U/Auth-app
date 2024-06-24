// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginRequest } from '../LoginAction/LoginAction';

// const LoginForm = () => {
//   const [userName, setuserName] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const loginError = useSelector(state => state.auth?.error);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(loginRequest({ userName, password }));
//   };

//   return (
//     <div>
//       <h2>User Login</h2>
//       {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>userName:</label>
//           <input type="text" value={userName} onChange={(e) => setuserName(e.target.value)} />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../LoginAction/LoginAction';

const LoginForm = () => {
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const loginError = useSelector(state => state.auth?.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest({ userName, password }));
  };

  return (
    <div>
      <h2>User Login</h2>
      {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>userName:</label>
          <input 
            type="text" 
            value={userName} 
            onChange={(e) => setuserName(e.target.value)} 
            autoComplete="username"
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
