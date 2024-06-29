import React from 'react'
import './values.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck , faLock ,faAward , faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

function Values() {
  return ( 
    <>
    <div className="card-list-container">
  <div className="card-listValue">
    <div className="card">
      <div className="icon">
        <FontAwesomeIcon icon={faTruck}  />
      </div>
      <div className="contentValue">
        <div className="title">Free Shipping</div>
        <div className="description">Order above $1000</div>
      </div>
   
    </div>
  </div>
  <div className="card-listValue">
    <div className="card">
      <div className="icon">
        <FontAwesomeIcon icon={faLock} />
      </div>
      <div className="contentValue">
        <div className="title">Free Shipping</div>
        <div className="description">Order above $1000</div>
      </div>
   
    </div>
  </div>
  <div className="card-listValue">
    <div className="card">
      <div className="icon">
        <FontAwesomeIcon icon={faAward} />
      </div>
      <div className="contentValue">
        <div className="title">Free Shipping</div>
        <div className="description">Order above $1000</div>
      </div>
   
    </div>
  </div>
  <div className="card-listValue">
    <div className="card">
      <div className="icon">
        <FontAwesomeIcon icon={faPhoneVolume} />
      </div>
      <div className="contentValue">
        <div className="title">Free Shipping</div>
        <div className="description">Order above $1000</div>
      </div>
   
    </div>
  </div>
</div>

    </>
  )
}

export default Values