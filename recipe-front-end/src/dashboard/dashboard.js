import React from "react"; 
import NavBar from "../navigation/navbar"
import RecipeCard from "../recipecard/recipecard"



export default function Dashboard() {

    return (
        <div>
         <NavBar/>   
         <div >
         <RecipeCard/>
         </div>
     
     </div>
     )
}