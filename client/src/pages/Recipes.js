import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_RECIPES } from '../utils/queries';
// import RecipeList from '../components/RecipeList';

var recipelist = require('../utils/recipeAPI');

const Recipes = () => {
  const { recipeID } = useParams();

    const { loading, data } = useQuery(QUERY_RECIPES, {
        variables: { recipeID: recipeID }
    });

    const recipes = data?.recipes || [];

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container my-1">
            <RecipeList recipes={recipes} />
        </div>
    );
};

export default Recipes;


