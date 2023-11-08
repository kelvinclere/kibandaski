import React, { useState } from 'react';
import styles from './LogInPage.module.css';
import { Link, useHistory } from 'react-router-dom';

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phoneNumber) {
      setError("Please fill in all fields");
      return;
    }

    const userData = {
      name,
      email,
      phoneNumber,
    };

    try {
      const response = await fetch('https://food-delivery-app-qnhr.onrender.com/sms/sendOTP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        setIsRegistered(true);
        setError(null); // Reset any previous error message on successful registration
        history.push('/Otpinput'); // Redirect to the OTP verification page upon successful registration
      } else {
        throw new Error('Sending OTP failed');
      }
    } catch (error) {
      setIsRegistered(false);
      setError('Sending OTP failed. Please try again.');
    }
  };

  return (
    <div className={styles["login-container"]}>
      <div className={styles["login-form"]}>
        <h1>Create Account</h1>
        {isRegistered && (
          <p>Registration successful! Please verify OTP in <Link to="/Otpinput">OTP Verification</Link>.</p>
        )}
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <button type="submit">Next</button>
        </form>
        <div className={styles["signup-text"]}>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;




