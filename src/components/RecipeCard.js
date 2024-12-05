import React from 'react'
import {NavLink} from 'react-router-dom'

const RecipeCard = ({recipe, Updatednumber, index}) => {

    return (
        <div className={`card ${(Updatednumber - (Updatednumber - index)) == 0 ? "active" : " " } `}>
            <figure className='main_fig'>
            <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="card-image"
            />
                {(Updatednumber - (Updatednumber - index)) === 0 ? 
               <> <p className='text'>{recipe.strInstructions}</p>
                <div className="overlay"></div>
                </>
                 : null
                }

            </figure>
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