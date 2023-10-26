import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Registration.css"
import Logo from "../../components/image/hero-epena.png"
import House from "../../components/image/house-door.svg"
import { Link } from 'react-router-dom';

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

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <form className="form formm" onSubmit={handleRegistration}>
        <div className="text-center mt-2">
          <img src={Logo} alt="" />
        </div>
          <input 
            type="text" 
            placeholder="Email Address" 
            id="username" 
            className="inputt mt-5"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password"
            placeholder="Password" 
            id="password" 
            className="inputt mt-3" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
          <button className="but" type="submit">REGISTRASI</button>
          {error && <div style={{ color: 'red' }}>{error}</div>}

          <div className="text-center mt-3 mb-2">Sudah punya akun?
              <Link className="text-login fw-bold" to="/login">MASUK</Link>
          </div>

          <div className="text-center">
            <Link to="/">
              <img src={House} alt="" className="kotak-home" />
            </Link>
          </div>
      </form>
    </>
  );
}

export default Registration;