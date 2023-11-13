import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './Otpinput.css';
import axios from 'axios';

class Otpinput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp1: '',
      otp2: '',
      otp3: '',
      otp4: '',
      otp5: '',
      otp6: '',
      error: '', // New state for error messages
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value1, event) {
    this.setState({ [value1]: event.target.value });
  }


  handleSubmit(event) {
    event.preventDefault();
  
    // Reset error state before verifying OTP
    this.setState({ error: '' });
  
    // Perform OTP verification
    this.verifyOTP().then((isVerified) => {
      if (isVerified) {
        console.log('OTP verified successfully');
        // Navigate to the login page
        this.props.history.push('/login');
      } else {
        console.log('OTP verification failed');
        // Handle OTP verification failure (error message will be displayed)
        this.setState({ error: 'OTP verification failed. Please try again.' });
      }
    });
  }

    // Perform OTP verification by making an HTTP request to the server
    verifyOTP() {
      const { otp1, otp2, otp3, otp4, otp5, otp6 } = this.state;
      const otp = `${otp1}${otp2}${otp3}${otp4}${otp5}${otp6}`;
    
      // Use the provided endpoint for OTP verification
      const apiUrl = 'https://food-delivery-app-qnhr.onrender.com/sms/confirmOTP';
    
      // Make a POST request to verify the OTP
      return axios.post(apiUrl, { otp })
        .then(response => {
          // Check the response for success
          return response.data.success === true;
        })
        .catch(error => {
          console.error('OTP verification error:', error);
          return false; // Assume OTP verification failed on error
        });
    }

  inputFocus = (elmnt) => {
    if (elmnt.key === 'Delete' || elmnt.key === 'Backspace') {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      const next = elmnt.target.tabIndex;
      if (next < 6) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };
  render() {
    return ( 
      <form onSubmit={this.handleSubmit}>
        <p>Enter the OTP code sent to your number and click verify to continue.</p>
        <div className="otpContainer">

          <input
            name="otp1"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp1}
            onKeyPress={this.keyPressed}
            onChange={e => this.handleChange("otp1", e)}
            tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}

          />
          <input
            name="otp2"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp2}
            onChange={e => this.handleChange("otp2", e)}
            tabIndex="2" maxLength="1" onKeyUp={e => this.inputfocus(e)}

          />
          <input
            name="otp3"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp3}
            onChange={e => this.handleChange("otp3", e)}
            tabIndex="3" maxLength="1" onKeyUp={e => this.inputfocus(e)}

          />
          <input
            name="otp4"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp4}
            onChange={e => this.handleChange("otp4", e)}
            tabIndex="4" maxLength="1" onKeyUp={e => this.inputfocus(e)}
          />

          <input
            name="otp5"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp5}
            onChange={e => this.handleChange("otp5", e)}
            tabIndex="5" maxLength="1" onKeyUp={e => this.inputfocus(e)}
          />

<input
            name="otp6"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={this.state.otp6}
            onChange={e => this.handleChange("otp6", e)}
            tabIndex="6" maxLength="1" onKeyUp={e => this.inputfocus(e)}
          />
        </div>

        <Button className="primary" type="submit">
          verify
        </Button>
      </form>
    );
  }
}


export default Otpinput;
