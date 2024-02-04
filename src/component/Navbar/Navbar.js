import React from 'react';
// import { Link, Router, Switch, Route} from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { BurgerMenu } from 'react-burger-menu';
import logo from '../../asset/emages/oodleslogo.svg';
import './Navbar.css'
 import FullPageImage from '../Header/Header';
 import FullPageImage1 from '../Header/Header1';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <a href="#"><img src={logo} alt="Logo"/></a>
      </div>

        <a id="home" className="bm-menu1" href="/home" >Home</a>
        <a id="about" className="bm-menu2" href="/about">About Us</a>
        <a id="services" className="bm-menu3" href="/service">Services</a>
        <a id="contact" className="bm-menu4" href="/CaseStudies">Impact Stories</a>
        <a id="contact" className="bm-menu5" href="/contact">Contact</a>
        <a id="contact" className="bm-menu6" href="/SignUp">Sign Up</a>
     
    </div>
  );
};
 
export default Navbar;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { BurgerMenu } from 'react-burger-menu';
// import logo from '../../asset/emages/oodleslogo.svg';
// import './Navbar.css';
// import FullPageImage from '../Header/Header';
// import FullPageImage1 from '../Header/Header1';

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="navbar-logo">
//         <Link to="/">
//           <img src={logo} alt="Logo" />
//         </Link>
//       </div>

//       <Link to="/home" className="bm-menu1">
//         Home
//       </Link>
//       <Link to="/about" className="bm-menu2">
//         About Us
//       </Link>
//       <Link to="/service" className="bm-menu3">
//         Services
//       </Link>
//       <Link to="/CaseStudies" className="bm-menu4">
//         Impact Stories
//       </Link>
//       <Link to="/contact" className="bm-menu5">
//         Contact
//       </Link>
//       <Link to="/SignUp" className="bm-menu6">
//         Sign Up
//       </Link>
//     </div>
//   );
// };

// export default Navbar;
