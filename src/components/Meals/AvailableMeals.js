import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./Mealitem/MealItem";

import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://food-delivery-app-qnhr.onrender.com/menuItems"
        );

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const responseData = await response.json();
        const loadedMeals = [];

        await Promise.all(
          Object.entries(responseData).map(async ([key, data]) => {
            for (const obj of data) {
              const meal = {
                id: key,
                name: obj.name,
                description: obj.description,
                price: obj.price,
                image: obj.image // add the image URL
              };
              loadedMeals.push(meal);
            }
          })
        );

        setMeals(loadedMeals);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHttpError(error.message);
      }
    };

    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  if (meals.length === 0) {
    return (
      <section className={classes.MealsError}>
        <p>No meals found.</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <Card key={meal.id}>
      <MealItem
        id={meal.id}
        name={meal.name.toUpperCase()} // Capitalize the entire name
        description={meal.description}
        price={meal.price}
        image={meal.image}
      />
    </Card>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul className={classes.mealsList}>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;


