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
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemovehandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, totalAmount: 1 });
    };

    const orderHandler = () => {
        setIsCheckout(true);
    };

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        const response =
            await fetch(
                "https://food-delivery-app-qnhr.onrender.com/menuItems",

                // "https://react-http-eef0d-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
                {
                    method: "POST",
                    body: JSON.stringify({
                        user: userData,
                        orderedItems: cartCtx.items,
                    }),
                }
            );
            console.log(response)
        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart();
    };

    console.log(cartCtx)

    const cartItems = (
        <ul className={classes["cart-items"]}>
            {cartCtx.items.map((item, index) => (
                <CartItem
                    key={index}
                    name={item.name}
                    amount={item.totalAmount}
                    price={item.price}
                    onRemove={cartItemRemovehandler.bind(null, item._id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    const modalActions = (
        <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>
                Close
            </button>
            {hasItems && (
                <button className={classes.button} onClick={orderHandler}>
                    Order
                </button>
            )}
        </div>
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