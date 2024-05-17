import React from 'react'
import './NewsLetter.css'
import dell from "./Dell.png"
import phone from './phone.png'
function NewsLetter() {
  return (
    <div>
        <div className="containerNews"> 
            <div className='dell-image'><img src={dell} alt="dell" /></div>
            <div className="contentNews">
                <h1>Join Our Newsletter</h1>
                <p>Sign up for deals, new products and promotions</p>
                <input type='email' placeholder='Email address' className='email-input'/>
                <input type='submit' value="Signup" className='button-input'/>
                <hr />
            </div>
            <div className='phone'><img src={phone} alt="phone" /></div>
            
            
        </div>

    </div>
  )
}

export default NewsLetter