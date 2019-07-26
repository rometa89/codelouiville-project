import React from 'react';

import Recipes from './Recipes';

const RecipeList = props => {
    const results = props.recipes;

    let recipes = results.map(recipe => {
        return (<Recipes key={recipe.recipe_id} image_url={recipe.image_url} title={recipe.title} publisher={recipe.publisher} />)
    })

    return(
        <div className="recipeList">
            {recipes}
        </div>
    );
}

export default RecipeList;