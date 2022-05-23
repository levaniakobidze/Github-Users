import React from "react";
import "./Navbar.css";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-content'>
        <div className='logo-cont'>
          <AiFillGithub className='logo' />
          <h1>Search</h1>
        </div>
        <ul className='navigation'>
          <li>
            <AiOutlineHome className='home-logo' />
            HOME
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
