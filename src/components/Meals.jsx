import { useEffect, useState } from "react";
import MealItem from "./MealItem";

const Meals = () => {
  const [mealData, setMealData] = useState([]);

  async function getMeals() {
    const request = await fetch("http://localhost:3000/meals");
    const data = await request.json();

    setMealData(data);
  }

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <ul id="meals">
      {mealData.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
