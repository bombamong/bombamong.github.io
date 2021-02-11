import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = props => {
  return (
    <nav className={styles.container}>
      <div className={styles.routeContainer}>
        <Link to="/">
          <h1>HOME</h1>
        </Link>
      </div>
      <div className={styles.routeContainer}>
        <Link to="/about">
          <h1>ABOUT</h1>
        </Link>
      </div>
      <div className={styles.routeContainer}>
        <Link to="/contact">
          <h1>CONTACT</h1>
        </Link>
      </div>
      <div className={styles.routeContainer}>
        <Link to="/blogp">
          <h1>POST</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
