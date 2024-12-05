import React from 'react'
import {NavLink} from 'react-router-dom'

const RecipeCard = ({recipe}) => {
    console.log("recipe",recipe)

    return (
        <div className="card">
            <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="card-image"
            />
            <div className="card-body">
                <span className="category">{recipe.strCategory}</span>
                <h3>{recipe.strMeal}</h3>
                {/* <a href={"https://www.themealdb.com/meal/" + recipe.idMeal} target="_blank">Instructions</a> */}
                <NavLink to={`/${recipe.idMeal}`}><span>Instructions</span></NavLink>
            </div>
        </div>
    )
};

export default RecipeCard