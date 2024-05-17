import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../Pages/Assets/logo.jpg';
import '../Pages/layout.css'
const Layout = () => {
  return (
    <>
    <div className="container">
    <nav className="nav-links">
      <ul>
      <div className="logo"> 
          <img src={logo}
            className="img" alt="logo"
          />
          </div>
        
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
          <li className="search-icon" >
          <FontAwesomeIcon icon={faSearch} />
          </li>
            <li>
            
            <Link to="/contact"><h5>Login</h5></Link>
          </li>
          <li>
            <Link to="/contact"><h5>SignUp</h5></Link>
          </li>
          
        </ul>
      </nav>     
    </div>
    <div><Outlet /></div>
    </>
  )
};

export default Layout;