import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_RECIPES } from '../utils/queries';
// import RecipeItem from '../components/RecipeItem';
import RecipeForm from '../components/MealForm';
// import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import RecipeList from '../utils/recipeAPI';


function Recipes() {
    // const dispatch = useDispatch();
    // const state = useSelector((state) => state);
    const [currentRecipe, setCurrentRecipe] = useState();

   const { recipeID } = useParams();

    const { loading, data } = useQuery(QUERY_RECIPES, {
        variables: { recipeID: recipeID }

    });

    const recipes = data?.recipes || [];

    const handleClick = (recipe) => {
          if (currentRecipe?.recipeId === recipe.recipeId) {
            setCurrentRecipe(null);
        } else {
            setCurrentRecipe(recipe);

        }
    };
    
    return (
        <main>
            <div className="flex-row justify-center">
                <div className="col-12 col-md-10 mb-3 p-3">
                    <RecipeForm />
                </div>
                <div className="col-12 col-md-10 mb-3 p-3">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <RecipeList
                            recipes={recipes}
                            title="Click on a recipe to see details"
                            handleClick={handleClick}
                            currentRecipe={currentRecipe}
                        />
                    )}
                </div>
            </div>
        </main>
    )
};

export default Recipes;


