import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        phoneNumber: true,
        location: true,
        buildingName: true,
    });

    const nameInputRef = useRef();
    const phoneNumberInputRef = useRef();
    const locationInputRef = useRef();
    const buildingNameInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredPhoneNumber = phoneNumberInputRef.current.value;
        const enteredLocation = locationInputRef.current.value;
        const enteredBuildingName = buildingNameInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredPhoneNumberIsValid = !isEmpty(enteredPhoneNumber);
        const enteredLocationIsValid = !isEmpty(enteredLocation);
        const enteredBuildingNameIsValid = isFiveChars(enteredBuildingName);

        setFormInputsValidity({
            name: enteredNameIsValid,
            phoneNumber: enteredPhoneNumberIsValid,
            location: enteredLocationIsValid,
            buildingName: enteredBuildingNameIsValid,
        });

        const formIsValid =
            enteredNameIsValid &&
            enteredPhoneNumberIsValid &&
            enteredLocationIsValid &&
            enteredBuildingNameIsValid;

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            phoneNumber: enteredPhoneNumber,
            location: enteredLocation,
            buildingName: enteredBuildingName,
        });
    };

    const nameControlClasses = `${classes.control} ${
        formInputsValidity.name ? "" : classes.invalid
    }`;
    const streetControlClasses = `${classes.control} ${
        formInputsValidity.phoneNumber ? "" : classes.invalid
    }`;
    const postalCodeControlClasses = `${classes.control} ${
        formInputsValidity.location ? "" : classes.invalid
    }`;
    const cityControlClasses = `${classes.control} ${
        formInputsValidity.buildingName ? "" : classes.invalid
    }`;

    // Define input refs for street, postal code, and city
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef} />
            </div>
            {!formInputsValidity.name && <p>Please enter a valid name!</p>}
            <div className={streetControlClasses}>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" id="street" ref={streetInputRef} />
            </div>
            {!formInputsValidity.phoneNumber && <p>Please enter a valid phone number!</p>}
            <div className={postalCodeControlClasses}>
                <label htmlFor="location">Location</label>
                <input type="text" id="postal" ref={postalCodeInputRef} />
            </div>
            {!formInputsValidity.location && (
                <p>Please enter a valid location!</p>
            )}
            <div className={cityControlClasses}>
                <label htmlFor="buildingName">Building Name</label>
                <input type="text" id="city" ref={cityInputRef} />
            </div>
            {!formInputsValidity.buildingName && <p>Please enter a valid building name!</p>}
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;
