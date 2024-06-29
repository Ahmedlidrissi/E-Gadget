
import { Link } from "react-router-dom"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './footer.css'
export default function Footer() {
    return (
        <div className="container-footer">
           <div className="text">
             <h3>E-GADGET</h3>
             <p> Gift & Decoration store </p>
            </div>
            <div className="nav-footer">
             <ul>   
          <li>
            <Link to="/"><h5>Home</h5></Link>
          </li>
          <li>
            <Link to="/Shop"><h5>Shop</h5></Link>
          </li>
          <li>
            <Link to="/Product"><h5>Product</h5></Link>
          </li>
          <li>
            <Link to="/contact"><h5>Contact</h5></Link>
          </li>
        </ul>
        </div>
           
             <footer class="footer">
    <div class="desc-footer">
      <p>Copyright © 2023 E-Gadget. All rights reserved</p>
      <div class="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
      </div>
      <div class="social-media">
        <a href="#"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
        <a href="#"><FontAwesomeIcon icon={faFacebook} size="2x"/></a>
        <a href="#"><FontAwesomeIcon icon={faYoutube} size="2x"/></a>
      </div>
      
    </div>
  </footer>
        </div>
        )
    }