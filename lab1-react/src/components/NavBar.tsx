import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Logo" style={{width: 48, height: 48}} />
      </div>
      <nav className="nav-links">
        <ul>
          <li><Link to="/employees">Employees</Link></li>
          <li><Link to="/organization">Organization</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
