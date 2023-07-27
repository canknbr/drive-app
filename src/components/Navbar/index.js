import React, { useState } from "react";
import styles from "./Navbar.module.css";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";

import logo from "../../images/logo.png";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className={styles.navbar}>
      <img src={logo} alt="" />
      <nav>
        <ul
          className={
            showMenu ? `${styles.menu} ${styles.active}` : `${styles.menu}`
          }
        >
          <li>
            <a href="">Learn More</a>
          </li>
          <li>
            <a href="">Log In</a>
          </li>
          <li>
            <a href="">Sign Up</a>
          </li>
          <li>
            <AiOutlineSearch
              style={{
                marginTop: "6px",
              }}
            />
          </li>
          <li>
            <AiOutlineUser
              style={{
                marginTop: "6px",
              }}
            />
          </li>
        </ul>
      </nav>
      <div className={styles.mobile_btn}>
        {showMenu ? (
          <AiOutlineClose size={25} onClick={toggleMenu} />
        ) : (
          <AiOutlineMenu size={25} onClick={toggleMenu} />
        )}
      </div>
    </header>
  );
};

export default Navbar;
