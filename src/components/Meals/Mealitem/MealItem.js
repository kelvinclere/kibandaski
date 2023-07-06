import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `Ksh ${props.price}`;

  const truncateDescription = (description) => {
    const words = description.split(" ");
    const truncatedWords = words.slice(0, 10);
    const truncatedDescription = truncatedWords.join(" ");
    return truncatedDescription + (words.length > 10 ? "..." : "");
  };

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props._id,
      name: props.name,
      totalAmount: amount,
      price: props.price,
      image: props.image, // pass the image URL as a prop
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>
          {truncateDescription(props.description)}
          <img src={props.image} alt={props.name} /> {/* render the image */}
        </div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props._id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;

