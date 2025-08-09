import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import ProfileIcon from "./ProfileIcon";
import Icon from "./Icon";
import '../style/common/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <img className="sm-2" src="/images/icons/LOGOS/esyassoft 1.svg" alt="logo" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item pe-4">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item pe-4">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item pe-4">
              <Link className="nav-link" to="/trading">Trading</Link>
            </li>
          </ul>
          <Input />
          <Icon
            classname="icon"
            image="/images/icons/NAV ICONS/Group.svg"
          />
          <ProfileIcon />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
