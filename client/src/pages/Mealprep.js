import React, { useState } from 'react';    

import { useQuery } from '@apollo/client';
import { QUERY_MEALS } from '../utils/queries';

import MealList from '../components/MealList';
import MealForm from '../components/MealForm';

const Mealprep = () => {
  const [currentMeal, setCurrentMeal] = useState(null);


  const { loading, data } = useQuery(QUERY_MEALS);
  const meals = data?.meals || [];


  const handleClick = (meal) => {
    if (currentMeal?.mealId === meal.mealId) {
      setCurrentMeal(null);
    } else {
      setCurrentMeal(meal);

    }
  };

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 mb-3 p-3">
          <MealForm />
        </div>
        <div className="col-12 col-md-10 mb-3 p-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <MealList
              meals={meals}
              title="Click on a meal to see details"
              handleClick={handleClick}
              currentMeal={currentMeal}
            />
          )}
        </div>
      </div>
    </main>
  )
};

export default Mealprep;
