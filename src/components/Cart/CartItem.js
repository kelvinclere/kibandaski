import React from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
    return (
        <li className={classes["cart-item"]}>
            <div>
                <img src={props.image} alt={props.name} />
            </div>
            <div>
                <h2>{props.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>Ksh{props.price.toFixed(2)}</span>
                    <span className={classes.amount}>x {props.amount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onRemove}>−</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
