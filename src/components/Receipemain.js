import React from 'react'
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import { useState ,useEffect } from 'react';

const apiUrl ="https://www.themealdb.com/api/json/v1/1/search.php?s="

const Receipemain = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("")
    const [recipes, setRecipes] =useState([]); 

    const searchRecipes =async () =>{
        setIsLoading(true);
        const url = apiUrl + query;
        const res = await fetch(url);
        const data= await res.json();
        console.log("data",data)
        setRecipes(data.meals);
        setIsLoading(false);
    };
    useEffect(()=>{
        searchRecipes()
        // handleQuery()
    },[])
const handleQuery =(event) =>{
    setQuery(event.target.value)
}
    const handleSubmit = (event) => {
        event.preventDefault();
        searchRecipes();
      }

  return (

    <div className='receipe'>
    <div className="container">
    <h2>Our Food Recipes</h2>
    <SearchBar
      isLoading={isLoading}
      query={query}
      setQuery={setQuery}
      handleSubmit={handleSubmit}
      handleQuery={handleQuery}
    />
    <div className="recipes">
      
      {recipes ? recipes.map(recipe => (
        <RecipeCard
           key={recipe.idMeal}
           recipe={recipe}
        />
      )) : "No Results."}
    </div>
  </div>
  </div>

  )
}

export default Receipemain