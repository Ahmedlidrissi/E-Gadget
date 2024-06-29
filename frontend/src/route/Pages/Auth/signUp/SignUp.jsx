import React from 'react'
import Logo_Egadget from './assets/egadgetLogo.png'
import laptopEgadget from "./assets/authentification.png"
import { useNavigate } from 'react-router-dom';
import './SignUp.css'

function SignUp() {
  const navigate = useNavigate();
  const handleLogin=()=>{
    navigate('/login');
  }
  return (
    <div className='container-signUp'>
<div className='image-signup'>
    <img src={Logo_Egadget} alt="Logo_Egadget" className='logo'/>
    <img src={laptopEgadget} alt="laptopEgadget" className='laptop'/>
</div>

     
<div className="content_Sign">
<h3 id='logoName'>E-Gadget</h3>
  <div className='Sign_info'>
    <h3>Sign up</h3>
    <p>Already have an account? <input type='submit' value='Sign in' onClick={handleLogin}/></p>
  </div>
<form className='formulaire'>
<input type="text" placeholder='Your name'/><br/>
<input type="text" placeholder='Username'/><br/>
<input type="email" placeholder='Email address'/><br/>
<input type="password" placeholder='Passsword'/><br/>
</form>
<input type="checkbox" />
<label>I agree with <span className='check'>Privacy Policy</span> and <span className='check'>Terms of Use</span></label>
<div className='btn-submit'>Sign Up</div>

</div>
    </div>
  )
}

export default SignUp