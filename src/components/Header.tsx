import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/images/logo.jpeg";

import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

type HeaderProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Supvaa Advisory Group Ltd Logo" />
      </div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/who-we-are">Who We Are</NavLink>
        <NavLink to="/what-we-do">What We Do <FaChevronDown /></NavLink>
        <NavLink to="/our-impact">Our Impact <FaChevronDown /></NavLink>
        <NavLink to="/insights">Insights</NavLink>
        <NavLink to="/join-us">Join Us</NavLink>
        <NavLink to="/contact" className="contact-btn">Contact Us</NavLink>
        <button 
          className="search-icon" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaSearch />
        </button>
      </nav>
    </header>
  );
};

export default Header;
