import classes from "./Footer.module.css";
import mealsImage from "../../assets/google.jpeg";


const Footer = (props) => {
  return (
    <>
      <footer className={classes.footer}>
        <div className="social">
        <h1>Kibadaski</h1>
        <img id="img1" src={mealsImage} alt="Google Play icon!" />
        </div>
        <h1>Contact us</h1>
        <h1>About Us</h1>
      </footer>
    </>
  );
};

export default Footer;
