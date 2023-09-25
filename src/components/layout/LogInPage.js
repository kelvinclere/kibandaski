import React, { useState } from 'react';
import styles from './LogInPage.module.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [dataInput, setDataInput] = useState("");

  const submitThis = (e) => {
    e.preventDefault();
    const info = { email: email, passw: passw };
    setDataInput([info]);
  };

  const handleSignUpClick = () => {
    // Add code here to handle the sign-up action
    console.log("Sign Up text clicked");
  };

  return (
    <div className={styles["login-container"]}>
      <div className={styles["login-form"]}> 
        <h1>Enter Your Login Details</h1>
        <form onSubmit={submitThis}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="passw">Password</label>
            <input type="password" name="passw" id="passw" value={passw} onChange={(e) => setPassw(e.target.value)} />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className={styles["signup-text"]}>
        <p>Don't have an account? <Link to="/signup">Click here to SignUp</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;






