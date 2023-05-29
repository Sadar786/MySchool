import { useState } from 'react';
import './navbar.css';
import NavbarLogo from '../../assets/NavbarLogo.png';
import { NavLink, Outlet } from "react-router-dom";
import { Button } from '../../components';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav className="navbar 
navNDisplay navbar-expand-lg">
        <img src={NavbarLogo} alt="NavbarLogo" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navigation  collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"> <NavLink className="nav-link"  to="/"  >Home</NavLink></li>
            <li className="nav-item"> <NavLink className="nav-link" to="/about" >About</NavLink></li>
            <li className="nav-item"> <NavLink className="nav-link" to="/blog">Certification</NavLink></li>
            <li className="nav-item"> <NavLink className="nav-link" to="/formReg" >Registration</NavLink></li>
            <li className="nav-item"> <NavLink className="nav-link" to="/courses" >Courses</NavLink></li>
            <li className="nav-item"> <NavLink className="nav-link" to="/contact">Contact</NavLink></li>
            <NavLink className="nav-link" to="/signIn">
              <Button text="Sign In" />
            </NavLink>
            <NavLink className="nav-link" to="/signUp">
              <Button text="Sign Up" />
            </NavLink>
          </ul>
        </div>
      </nav>

      <div className="navbar-responsive">
        {toggleMenu ? (
          <div className="showIcon">
            <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          </div>
        ) : (
          <div className="showIcon">
            <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          </div>
        )}
        {toggleMenu && (
          <nav className="navbar  navbar-responsive navbar-expand-lg">
            <img src={NavbarLogo} alt="NavbarLogo" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navigation  collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav  navRes me-auto mb-2 mb-lg-0">
              
                <li className="nav-item"> <NavLink className="nav-link" to="/"onClick={()=>setToggleMenu(false)}>Home</NavLink></li>
                <li className="nav-item"> <NavLink className="nav-link" to="/about" onClick={()=>setToggleMenu(false)}>About</NavLink></li>
                <li className="nav-item"> <NavLink className="nav-link" to="/blog" onClick={()=>setToggleMenu(false)}>Certification</NavLink></li>
                <li className="nav-item"> <NavLink className="nav-link" to="/formReg" onClick={()=>setToggleMenu(false)}>Registration</NavLink></li>
                <li className="nav-item"> <NavLink className="nav-link" to="/courses" onClick={()=>setToggleMenu(false)}>Courses</NavLink></li>
                <li className="nav-item"> <NavLink className="nav-link" to="/contact" onClick={()=>setToggleMenu(false)}>Contact</NavLink></li>
                <li className="nav-item"> <NavLink className="nav-link" to="/signIn" onClick={()=>setToggleMenu(false)}>Sign In</NavLink></li>
                <li className="nav-item"> <NavLink className="nav-link" to="/signUp" onClick={()=>setToggleMenu(false)}>Sign Up</NavLink></li>
              </ul>
            </div>
          </nav>
        )}
      </div>

      <Outlet />
    </>
  );
}

export default Navbar;
