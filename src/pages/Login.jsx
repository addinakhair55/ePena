import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../components/Context/AuthContext"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {login} = useAuth()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const isLoggedIn = await login({ email, password });
      if (isLoggedIn) {
        navigate('/add-product');
        alert(`Berhasil masuk!\nEmail: ${email}`);
      } else {
        setError('Email atau kata sandi salah.');
      }
    } catch (error) {
      console.error('Kesalahan saat login:', error);
    }
  };

  return (
    <>
      <div className="form-signin w-auto p-5 mt-5">
        <form onSubmit={handleLogin}>
          <h1 className="h3 mb-3 text-center">Login</h1>
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
            <label htmlFor="floatingInput">Username</label>
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
              autoComplete="current-password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="btn btn-info w-100 py-2" type="submit">
            Sign in
          </button>
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </form>
      </div>

    </>
  );
}

export default Login;