import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DayMeal.css';
import { Link } from 'react-router-dom';
const DayMeal = () => {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const getRandomMeal = async () => {
      try {
        const response = await axios.get(
          'https://www.themealdb.com/api/json/v1/1/random.php'
        );
        setMeal(response.data.meals[0]);
      } catch (error) {
        console.error(error);
      }
    };

    getRandomMeal();
  }, []);

  if (!meal) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2 className="header">The Meal</h2>
      <div className="day_meal">
        <div>
          <h2>Meal of the Day</h2>

          <Link to={`/meal/${meal.idMeal}`}>
            <h4>{meal.strMeal} </h4>
          </Link>
          <p>
            {meal.strCategory} | {meal.strArea}
          </p>
        </div>

        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
    </>
  );
};

export default DayMeal;
