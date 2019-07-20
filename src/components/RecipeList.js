import React from 'react';

import Recipes from './Recipes';

const RecipeList = props => {
    // const results = this.props.recipes;
    // let recipes = results.map(recipe =>
    //     <Recipes />
    // );

    return(
        <ul className="recipe-List">
            <Recipes />
        </ul>
    );
}

export default RecipeList;