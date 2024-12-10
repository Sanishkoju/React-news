import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NotFound from '../pages/NotFound';
const Single = () => {
    const {mealids} = useParams();
    const [info, setInfo] = useState();
    const [isLoading, setIsLoading] = useState(false);
 
    // console.log("mealId",mealids)

    const getInfo = async () =>{
      try{
      setIsLoading(true);  
        const get =  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealids}`);
        const jsonData = await get.json();
        console.log("jpt",jsonData.meals[0]);
        setInfo(jsonData.meals[0])
      } catch (error) {
        setInfo(null)
        console.log("not found",info) 
      }
        setIsLoading(false);
    }
    useEffect(()=>{
        getInfo()
    },[])
    // if(info != ""){
    //     getInfo()
    // }

    let isValidMealId = mealids && /^[0-9]+$/.test(mealids);

  if (!isValidMealId) {
    return <NotFound />;
  }

  return (
    <div className='single'>
   <div className='container'>
    { !info ? "Data Not Found" : 
    <div className='mealInfo'>
        <div className='infotop'>
            <figure>
                   <img src={info.strMealThumb}/>
            </figure>
            <div class="info_det">
              { info.strTags ?
             <div><strong>tag: </strong>{info.strTags}</div>
             : null
             }
            <div className="info_ingredient">
                <h2>Ingredient</h2>
                <ol>
            {Array.from({ length: 20 }, (_, i) => {
                const ingredientKey = `strIngredient${i + 1}`;
                const measureKey = `strMeasure${i + 1}`;

                    if (info[ingredientKey] && info[ingredientKey].trim() !== "") {
                        return (
                          <li key={i}>
                            {info[measureKey]} {info[ingredientKey]}
                          </li>
                        );
                      }
                      return null;
            })}
            </ol>
            </div>
            </div>
 
    </div>

 <div className='info'>
    <h1>Recipe Detail</h1>
    <button>{info.strMeal}</button>
    <h3>Intruction's</h3>
    <p>{info.strInstructions}</p>
    <a href={info.strSource} target='_blank'>Source</a>
 </div>
</div>
}
 </div>
 <div className={`spinner ${isLoading ? "active" : ""}`}>

<div className='loader'>
  
</div>
</div>
 </div>

    )
  }


export default Single

