import classes from "./Footer.module.css";
import mealsImage from "../../assets/google.jpeg";
import logoImage from "../../assets/Mautamu 4 Alt.png";
import facebookImage from "../../assets/facebook.png";  // import the Facebook icon image
import twitterImage from "../../assets/twitter.png"
import emailImage from "../../assets/gmail.png"


const Footer = (props) => {
  return (
    <>
      <footer className={classes.footer}>
        <div className="social">
          <img className={classes.logo} id="logo" src={logoImage} alt="logo image!" />
          <div>
          <img className={classes.playstore} id="playstore" src={mealsImage} alt="Google Play icon!" />
          </div>
         
        </div>
        <div>
          <h1>Contact Us</h1>
          <h3>Address:Nairobi-Kenya</h3>
          <h3>Email:Kibadaski@gmail.com</h3>
          <h3>Phone:0790793622</h3>
          <div id="media">
          <a href="https://www.facebook.com/"><img src={facebookImage} alt="Facebook icon!" /></a> 
          <a href="https://www.email.com/"><img src={emailImage} alt="Email icon!" /></a> 
          <a href="https://www.twitter.com/"><img src={twitterImage} alt="Twitter icon!" /></a> 
          </div>
           
        </div>
        <div>
        <h1>Information</h1>
        <div>
        <a href="#">Refund Policy</a>
        </div>
        <div>
        <a href="#">Privacy Policy</a>
        </div>
        <a href="#">Terms & Conditions</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;

