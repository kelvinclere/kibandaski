import classes from "./MealsSummary.module.css";
import SearchBar from "../layout/SearchBar";

const MealsSummary = () => {
  const handleSearch = (searchTerm) => {
    // Handle search logic here will come here
  };

  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To your Doorstep</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <SearchBar onSearch={handleSearch} />
 
    </section>
  );
};

export default MealsSummary;

