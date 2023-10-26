import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../../components/Context/AuthContext"
import Logo from "../../components/image/hero-epena.png"
import House from "../../components/image/house-door.svg"
import "../Registration/Registration.css"
import { Link } from 'react-router-dom';

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
        navigate('/dashboard');
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
       <form className="form formm" onSubmit={handleLogin}>
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
            autoComplete="current-password"
          />
          <button className="but" type="submit">MASUK</button>
          {error && <div style={{ color: 'red' }}>{error}</div>}

          <div className="text-center mt-3 mb-2">Belum punya akun?
              <Link className="text-login fw-bold" to="/register">REGISTRASI</Link>
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

export default Login;