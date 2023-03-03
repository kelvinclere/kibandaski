import mealsImage from "../../assets/meal2.jpg";
import logoImage from "../../assets/logo.png"

import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
            <img className={classes.logo} id="logo" src={logoImage} alt="logo image!" />
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="A table full of delicious food!" />
            </div>
        </>
    );
};

export default Header;