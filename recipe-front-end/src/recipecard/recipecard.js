import React from "react"; 
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

 import './recipecard.css' 


export default function RecipeCard () {

    return (
        <Card>
          <CardImg 
           src="https://raw.githubusercontent.com/Secret-Family-Recipes-Cookbook1/Front-End/main/sec-family-rec-book/src/images/recipe.jpg"
           alt="Card image cap"
           className="card-img" />
          <CardBody>
            <CardTitle className="card-title">Recipe title</CardTitle>
            <CardSubtitle >Recipe subtitle</CardSubtitle>
            <CardText>Some  stuff about recipe quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          </CardBody>
        </Card>
     )
}