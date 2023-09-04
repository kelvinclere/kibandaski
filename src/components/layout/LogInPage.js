import React, { useState } from 'react';
import styles from './LogInPage.module.css';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [dataInput, setDataInput] = useState("");

  const submitThis = (e) => {
    e.preventDefault();
    const info = { email: email, passw: passw };
    setDataInput([info]);
  };

  return (
    <div className={styles["login-container"]}>
      <div className={styles["login-form"]}> 
        <h1>Login Page</h1>
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
      </div>
    </div>
  );
};

export default LoginPage;



