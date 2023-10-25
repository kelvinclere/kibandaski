import mealsImage from "../../assets/meal2.jpg";
import logoImage from "../../assets/Mautamu 5.png"
import { Link } from 'react-router-dom';
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <img className={classes.logo} id="logo" src={logoImage} alt="logo image!" />
                {/* Add a brand name here */}
                <HeaderCartButton onClick={props.onShowCart} />
                <div className={classes.loginButton}>
                    <Link to="/login">Login</Link>
                </div>
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="A table full of delicious food!" />
            </div>
        </>
    );
};

export default Header;
