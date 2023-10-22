import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError('Email must have a valid format.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    const user = {
      email: email,
      password: password,
    };
    localStorage.setItem('user', JSON.stringify(user));

    alert(`Successfully registered!\nEmail: ${email}`);
    navigate('/login');
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <div className="form-signin w-auto p-5 mt-5">
        <form onSubmit={handleRegistration}>
          <h1 className="h3 mb-3 text-center">Registration</h1>
          <div className="form-floating">
            <input
              type="text"
              className="form-control mb-2"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control mb-2"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="btn btn-info w-100 py-2" type="submit">
            Register
          </button>
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </form>
      </div>
    </>
  );
}

export default Registration;