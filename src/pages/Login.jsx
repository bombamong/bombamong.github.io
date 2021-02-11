import React from "react";
import styles from "../styles/Login.module.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();

  const handleFormSumbit = e => {
    e.preventDefault();
    //need to make POST to server
    //check JWT or some form of Auth
    //need to implement fallback screen || loading screen
    console.log("logged in");
    setTimeout(() => {
      history.push("/");
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleFormSumbit} className={styles.formContainer}>
        <input className={styles.formInput} required type="email" />
        <input className={styles.formInput} required type="password" />
        <input
          className={`${styles.formInput} ${styles.submitInput}`}
          type="submit"
          value="😀"
        />
      </form>
    </div>
  );
};

export default Login;
