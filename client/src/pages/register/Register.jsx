import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../axios';

import './Register.scss';

function Register() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${BASE_URL}/auth/register`, inputs);
      navigate('/login');
    } catch (err) {
      setErr(err.response.data);
    }
  };
  return (
    <div>
      <div className="register">
        <div className="card">
          <div className="left">
            <h1>Register.</h1>
            <p>
            Create your account to connect with friends, family, and others. Customize your profile, share updates, and join a global community of individuals with similar interests.
            </p>
            <span>Do you have an account?</span>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
          <div className="right">
            <h1>Register</h1>
            <form>
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
              />
              <div style={{ color: 'red' }}>{err}</div>
              <button onClick={handleClick}>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
