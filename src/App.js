import React from 'react';
import Search from './components/Search';
import MealDetails from './components/MealDetails';
import DayMeal from './components/DayMeal';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  //const mealId = '52772';

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<DayMeal />}></Route>
        </Routes>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Search />}></Route>
          <Route path="/meal/:id" element={<MealDetails />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
