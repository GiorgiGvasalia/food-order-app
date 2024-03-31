import { useEffect, useState } from "react";

const Meals = () => {
  const [mealData, setMealData] = useState([]);

  async function getMeals() {
    const request = await fetch("http://localhost:3000/meals");
    const data = await request.json();

    console.log(data);
    setMealData(data);
  }

  useEffect(() => {
    getMeals();
  }, []);

  return <ul id="meals">
    {
        mealData.map((meal) => (
            <li key={meal.id} id="meal-item">{meal.name}</li>
        ))
    }
  </ul>;
};

export default Meals;
