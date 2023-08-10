import React from "react";
import ReactDOM from "react-dom";
import Cart from "../Cart/Cart";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const Modal = (props) => {
    const portalElement = document.getElementById("overlays");

    return ReactDOM.createPortal(
        
        <React.Fragment>
            <Backdrop onClose={props.onClose} />
            <ModalOverlay>{props.children}</ModalOverlay>
        </React.Fragment>,
        portalElement
    );
};

export default Modal;
