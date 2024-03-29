import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    const cartCtx = useContext(CartContext);

    const totalAmount = `Ksh${cartCtx.totalAmount}`;
    console.log("Cart Items: ", cartCtx.items);

    const hasItems = cartCtx.items.length > 0;

    const orderHandler = () => {
        setIsCheckout(true);
    };

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        const response = await fetch(
            "https://food-delivery-app-qnhr.onrender.com/menuItems",
            {
                method: "POST",
                body: JSON.stringify({
                    user: userData,
                    orderedItems: cartCtx.items,
                }),
            }
        );
        console.log(response);
        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart();
    };

    const modalActions = (
        <div className={classes.actions}>
            <button
                className={classes["button--alt"]}
                onClick={props.onClose}
            >
                Close
            </button>
            {hasItems && (
                <button className={classes.button} onClick={orderHandler}>
                    Order
                </button>
            )}
        </div>
    );

    const cartItems = (
        <ul className={classes["cart-items"]}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    amount={item.totalAmount}
                    price={item.price}
                />
            ))}
        </ul>
    );

    const cartModalContent = (
        <>
            {cartItems}

            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && (
                <Checkout
                    onConfirm={submitOrderHandler}
                    onCancel={props.onClose}
                />
            )}
            {!isCheckout && modalActions}
        </>
    );

    const isSubmittingModalContent = <p>Sending order data...</p>;
    const didSubmitModalContent = (
        <>
            <p>Successfully sent the order!</p>
            <div className={classes.actions}>
                <button className={classes.button} onClick={props.onClose}>
                    Close
                </button>
            </div>
        </>
    );

    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    );
};

export default Cart;
