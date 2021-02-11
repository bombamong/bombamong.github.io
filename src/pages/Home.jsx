import React from "react";
import UserProfile from "../components/UserProfile";
import BlogList from "../components/BlogList";
import styles from "../styles/Home.module.css";

const Home = props => {
  return (
    <div className={styles.container}>
      <UserProfile />
      <BlogList />
    </div>
  );
};

export default Home;
