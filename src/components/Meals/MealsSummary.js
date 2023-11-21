import { useState } from "react";
import classes from "./MealsSummary.module.css";
import SearchBar from "../layout/SearchBar";
import HeaderCartButton from "../layout/HeaderCartButton";

const MealsSummary = (props) => { // Pass the props parameter
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchTerm) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://food-delivery-app-qnhr.onrender.com/menuItems"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      // Check if the data is an object with an array
      if (typeof data === "object" && Array.isArray(data.menuItems)) {
        const filteredMeals = data.menuItems.filter((meal) =>
          meal.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredMeals);
      } else {
        throw new Error("Invalid data format!");
      }
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  };

  return (
    <section className={classes.summary}>
      <HeaderCartButton onClick={props.onShowCart} /> {/* Add the cart button here */}
      <h2>Delicious Food, Delivered To Your Doorstep</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <SearchBar onSearch={handleSearch} />

      {/* Render search results or loading/error messages */}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {searchResults.length > 0 && (
        <div>
          <h3>Search Results:</h3>
          <ul>
            {searchResults.map((meal) => (
              <li key={meal.id}>
                <h4>{meal.name}</h4>
                <p>Price: {meal.price}</p>
                <p>Description: {meal.description}</p>
                <img src={meal.image} alt={meal.name} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default MealsSummary;







