import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';


const Recipes = () => {
 const {id}=useParams();
  const recipes = useLoaderData();


  console.log(recipes);
  
   
    return (
        <div>
             {
                recipes.map(recipe =><RecipeDetails
                key={recipe.id}
                recipeMap={recipe}
                
                ></RecipeDetails>)
             }
             
           
        </div>
    );
};

export default Recipes;