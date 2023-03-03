import classes from "./Footer.module.css";
import mealsImage from "../../assets/google.jpeg";
import logoImage from "../../assets/logo.png"


const Footer = (props) => {
  return (
    <>
      <footer className={classes.footer}>
        <div className="social">
        <img className={classes.logo} id="logo" src={logoImage} alt="logo image!" />
        <img className={classes.playstore} id="playstore" src={mealsImage} alt="Google Play icon!" />
        </div>
        <div>
        <h1>Contact Us</h1>
        <h3>Kibadaski@gmail.com</h3>
        </div>
        <h1>About Us</h1>
      </footer>
    </>
  );
};

export default Footer;
