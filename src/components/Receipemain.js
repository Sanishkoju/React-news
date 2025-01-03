import React from 'react'
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import { useState ,useEffect } from 'react';
import "../CSS/Recipe.css"
import "../CSS/Spinner.css"

const apiUrl ="https://www.themealdb.com/api/json/v1/1/search.php?s="

const Receipemain = () => {
  
    let noofpost = (window.innerWidth > 767) ? 10 : 9;
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("")
    const [recipes, setRecipes] =useState([]);
    const [number, setNumber] = useState(noofpost)
    const [Updatednumber, setUpdatednumber] = useState(noofpost); 
    const [Totalarticles, setTotalarticles] = useState(0);  
    const [showImg, setShowImg] = useState(false);

    const searchRecipes =async () =>{
      try{
        setIsLoading(true);
        const url = apiUrl + query;
        const res = await fetch(url);
        const data= await res.json();
        
        setRecipes(data.meals);
        console.log("recipes",recipes.length)
        

        const Totalarticles = data.meals.length;
        setTotalarticles(Totalarticles);
        console.log("Totalarticless",Totalarticles)



        if (!data.meals) {
            throw new Error("No articles found");
          }
      
          const dt = data.meals.slice((number - noofpost), number); // Only slice if articles are available
          setRecipes(dt);
        } catch (error) {
          console.error("Error fetching data:", error);
          setRecipes([]); // Set empty data to avoid rendering errors
        }


        setIsLoading(false);
    };
    useEffect(()=>{
        searchRecipes();
       
        
    },[])
const handleQuery =(event) =>{
    setQuery(event.target.value)
}
    const handleSubmit = (event) => {
        event.preventDefault();
        searchRecipes();
        setNumber(noofpost);
      }
      const handlenext = () =>{
        setNumber((number) => number + noofpost);
       console.log("number",number);

       
    }
    const handleprev = () =>{
      setNumber((number) => number - noofpost);
     console.log("numberprev",number);

     
  }

    useEffect(() => {
      setIsLoading(true);
      console.log("Updated numbers:", number);
      setUpdatednumber(number);
      searchRecipes()
    }, [number]);

    

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
      
    {recipes && recipes.length > 0 ? (
  recipes.map((recipe, index) => (
    <RecipeCard
      key={recipe.idMeal}
      recipe={recipe}
      Updatednumber={Updatednumber}
      index={index}
    />
  ))
) : (
  "No Results."
  
)}

 
    </div>
    <div className='buttons'>
    {((Totalarticles < Updatednumber && Totalarticles > noofpost) || Updatednumber > noofpost ) ? <button onClick={handleprev} className="learnmore learnmoreprev">
        Prev
    </button> : null } 
    
    {((Totalarticles > Updatednumber && !Totalarticles == 0 && recipes.length > 0  ) ) ? <button onClick={handlenext} className="learnmorenext learnmore">
        Next
    </button> : null }

    </div>
  </div>
  <div className={`spinner ${isLoading ? "active" : ""}`}>

  <div className='loader'>
    
  </div>
 </div>
  </div>

  )
}

export default Receipemain


