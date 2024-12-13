import zIndex from '@mui/material/styles/zIndex';
import { display } from '@mui/system';
import { useState } from 'react';
import {NavLink} from 'react-router-dom'

const RecipeCard = ({recipe, Updatednumber, index}) => {
    const [showImg, setShowImg] = useState(false);
const handleimg =() =>{
    setShowImg(true)

    console.log("indr",index, showImg)
}
const icon = {
    cursor: 'pointer',
    position: 'absolute',
    top: '100px',
    right: '20px',
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.65)',
    display:'grid',
    placeContent:'center'
  };
    return (
        <div className={`card ${(Updatednumber - (Updatednumber - index)) == 0 ? "active" : " " } `}>
            <figure className='main_fig'>
            <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="card-image"
                onClick={() => handleimg()}
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

                
            {
                showImg ? 
                <div className='popup' style={{position:"fixed", top:"0" ,left:"0" ,bottom:"0",width:"100%", height:"100%",zIndex:"10",background:"#000000c9" }}>
                <div style={{display:"grid", placeContent:"center", width:"100%", height:"100%"}}>
                    <span style={icon} onClick={()=>setShowImg(false)}><Cross /></span>
                    <figure style={{maxWidth:"500px" ,aspectRatio:"1", width:"100%", margin:"20px"}}>
                    <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="card-image"
                width={100}
                height={100}
                style={{width:"100%" ,height:"100%"}}


            />
            </figure>
            </div>
            </div>
            : <></>
            
            }
            
            
        </div>
    )
};

export default RecipeCard

const Cross =()=>{
    return(
    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill="#000" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
)}