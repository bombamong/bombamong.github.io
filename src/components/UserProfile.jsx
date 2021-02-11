import React from "react";
import styles from "../styles/UserProfile.module.css";

const UserProfile = props => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img
          className={styles.avatarImage}
          src="https://picsum.photos/200/200"
          alt={"user profile"}
        />
      </div>
      <div className={styles.userNameContainer}>
        <h1>Blog</h1>
      </div>
    </div>
  );
};

export default UserProfile;
