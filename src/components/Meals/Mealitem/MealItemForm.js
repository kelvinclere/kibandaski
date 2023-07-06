import { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 50
        ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.inputContainer}>
            <Input
              ref={amountInputRef}
              label="Quantity"
              input={{
                id: "amount" + props.id,
                type: "number",
                min: "1",
                max: "50",
                step: "1",
                defaultValue: "1",
              }}
            />
            <button type="submit">ADD TO CART</button>
          </div>
          {!amountIsValid && <p>Please enter a valid amount (1-50).</p>}
        </form>
      );
      
};

export default MealItemForm;