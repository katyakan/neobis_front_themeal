import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './MealDetails.css';

const MealDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setMeal(response.data.meals[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMeal();
  }, [id]);

  if (!meal) {
    return <div>Loading...</div>;
  }

  const {
    strMeal,
    strMealThumb,
    strInstructions,
    strCategory,
    strArea,
    strTags,
    strYoutube,
    strIngredient,
  } = meal;

  const ingredientsArray = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredientsArray.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }

  return (
    <div>
      <h2 className="header">The Meal</h2>
      <div className="details_container">
        <div>
          <h2 className="heading">{strMeal}</h2>

          <div>
            {strCategory} | {strArea}
          </div>
          <div>{strTags}</div>

          <ul>
            {ingredientsArray.map((ingredient, index) => (
              <li key={index}>
                <p>{ingredient}</p>
              </li>
            ))}
          </ul>
        </div>

        <img className="imgdetails" src={strMealThumb} alt={strMeal} />
      </div>

      <div className="instructions">
        {' '}
        <h4>Instructions:</h4>
        {strInstructions}
      </div>
      {strYoutube && (
        <div>
          <a
            href={`https://www.youtube.com/watch?v=${strYoutube}`}
            target="_blank"
            rel="noreferrer"
            className="details_button"
          >
            Watch on YouTube
          </a>
        </div>
      )}
    </div>
  );
};

export default MealDetails;
