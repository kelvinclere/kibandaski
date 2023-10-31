import React, { useState } from 'react';
import styles from './LogInPage.module.css';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Basic validation - check for empty fields (you can add more complex validation as needed)
    if (!name || !email || !phoneNumber || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    // Prepare the data for the API request
    const userData = {
      name,
      email,
      phoneNumber,
      password
    };

    try {
      // Make a POST request to your sign-up API endpoint
      const response = await fetch('https://food-delivery-app-qnhr.onrender.com/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Sign-up failed');
      }

      // Handle a successful sign-up
      // Redirect to a new page, show a success message, etc.
      console.log('Sign-up successful');
    } catch (error) {
      setError('Sign-up failed. Please try again.');
    }
  };

  return (
    <div className={styles["login-container"]}>
      <div className={styles["login-form"]}>
        <h1>Create an Account</h1>
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
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <div className={styles["signup-text"]}>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
      </div>
      
    </div>
  );
};

export default SignUpPage;

