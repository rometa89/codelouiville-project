import React from 'react';

const Recipes = props => {
    console.log("props are: ", props);
    return (
        <div className="recipe-container">
            <div className="image_wrap">
                <img
                    className="recipe-img"
                    src={props.image_url}
                    alt={props.title} />
            </div>

            <div className="recipeTitle"> {props.title} </div>
            <div className="publisher"> {props.publisher} </div>
        </div>
    )

}

export default Recipes;