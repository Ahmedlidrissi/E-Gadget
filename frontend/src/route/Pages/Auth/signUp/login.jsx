import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo_Egadget from './assets/egadgetLogo.png';
import laptopEgadget from './assets/authentification.png';
import './SignUp.css';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your authentication logic to check the username and password
    // For now, let's assume username: 'admin' and password: 'admin' are valid
    if (username === 'admin' && password === 'admin') {
      navigate('/');
    } else {
      setError('Invalid username or password.');
    }
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="container-signUp">
      <div className="image-signup">
        <img src={Logo_Egadget} alt="Logo_Egadget" className="logo" />
        <img src={laptopEgadget} alt="laptopEgadget" className="laptop" />
      </div>

      <div className="content_Sign">
        <h3 id="logoName">E-Gadget</h3>
        <div className="Sign_info">
          <h3>Sign in</h3>
          <p>
            Don't have an account yet?
            <input type="submit" value="Sign up" onClick={handleSignUp} />
          </p>
        </div>
        <form className="formulaire" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your username or email address"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          {error && <div className="error" style={{color:'red'}}>{error}</div>}
          <button type="submit" className="btn-submit">
            Sign in
          </button>
        </form>
        <input type="checkbox" />
        <label>
          I agree with <span className="check">Privacy Policy</span> and{' '}
          <span className="check">Terms of Use</span>
        </label>
      </div>
    </div>
  );
}

export default Login;
