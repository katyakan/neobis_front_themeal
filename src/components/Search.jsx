import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      setSearchResults(response.data.meals);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('search on "enter" key');
  };
  return (
    <div className="search">
      <div>
        <h3>Find Your Meal</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchTerm}
            placeholder="Find your meal"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </form>
      </div>
      <div className="resultsearch">
        <ul>
          {searchResults.map((result) => (
            <li key={result.idMeal}>
              <Link to={`/meal/${result.idMeal}`}>
                <div className="flex">
                  <img
                    className="result_image"
                    src={result.strMealThumb}
                    alt={result.strMeal}
                  />

                  <p className="meal_name">{result.strMeal}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
