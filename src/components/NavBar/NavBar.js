import React from 'react';
import './NavBar.css';
import logo from '../../assets/logo1.png';
import ContactIcon from '../../assets/contact.png';
import { Link } from 'react-scroll';


const NavBar = () => {
  return (
    <nav className="NavBar">
        <img src={logo} alt="Logo" className='logo'/>
        <div className="desktopMenu">
 <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
 <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
 <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Projects</Link>
 <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}className="desktopMenuListItem">Contact</Link>
        </div>

        <button className="desktopMenuBtn" onClick={()=> {document.getElementById('contact').scrollIntoView({behavior: 'smooth'});}}>
<img src={ContactIcon} alt="ContactMe" className="desktopMenuImg"/>Contact Me</button>

    </nav>
  );
};

export default NavBar;
