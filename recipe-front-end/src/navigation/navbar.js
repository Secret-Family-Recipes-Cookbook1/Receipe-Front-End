import React from "react"; 
import {
    Collapse,
    Navbar,
    NavbarBrand,
    NavItem,
  } from 'reactstrap';
import  './navbar.css'
import { Link } from "react-router-dom";

export default function navbar() {

    return (
        <div>
            <Navbar className= "nav-bar">
                
                <img className="logo-img"
                    src="https://raw.githubusercontent.com/Secret-Family-Recipes-Cookbook1/Front-End/main/sec-family-rec-book/src/images/recipe.jpg"
                ></img>
                  <div className= "nav-sub-bar">
                    <Link to="/dashboard" className = "nav-link">
                        <NavItem className = "nav-item">
                            Dashboard
                        </NavItem>
                    </Link>

                    <div className = "space-div"></div>
                  
                    <Link to="/recipe" className = "nav-link">
                        <NavItem className = "nav-item">
                            Add a Recipe
                        </NavItem>
                    </Link>
                    
                </div>   
            </Navbar>
        </div>
     )
}