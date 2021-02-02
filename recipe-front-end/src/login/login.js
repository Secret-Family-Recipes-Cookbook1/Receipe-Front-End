import React, { useState, useEffect } from "react";
import  './login.css'
import { Link } from "react-router-dom";
import { Form,  FormGroup, Label, Input, Button   } from 'reactstrap';
import * as yup from 'yup';


export default function Login() {
     const [loginFormState , setloginFormState] = useState({
        email: '', 
        password: '', 
        rememberMe: false,
     })

    const [errors, setErrors] = useState({name: '', password: '', rememberMe: ''})
    const [disabled, setDisabled] = useState(true)

    const change = event => {
        }

    const submit = event => {
        event.preventDefault()
        }

    return (
        <div className="login-container">
            <img className="header-img"
              src="https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948"
              ></img>
            
            <div className="login-form-container">
                <div className="login-title-form-container">
                   <img className="logo-img"
                       src="https://raw.githubusercontent.com/Secret-Family-Recipes-Cookbook1/Front-End/main/sec-family-rec-book/src/images/recipe.jpg"
                   ></img>
                    <h1 className="logo-name"> RecipeCookbook</h1>
                </div>

                <div className="login-sub-title-form-container">
                    <h3>Login to your account</h3>
                </div>

                <div className="login-form">
                    <Form className='form-container'
                        onSubmit={submit} >

                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                name='email'
                                type='email'
                                className="form-control-login"
                                placeholder='enter email'
                                maxLength='35'
                            />
                        </FormGroup>
                        <div className = "space-div"></div>
                        <FormGroup>
                            <Label>password</Label>
                            <Input
                                name='password'
                                type='password'
                                className="form-control-login"
                                placeholder='enter password'
                            />
                        </FormGroup>

                        <div className="horizontal-login-components">
                            <FormGroup check>
                                <Label check 
                                 className = "check-box">
                                    <Input
                                        onChange={change}
                                        name='remember'
                                        type='checkbox'
                                    />{' '}
                                    Remember Me
                                </Label>
                            </FormGroup>

                            <a href=""> <p className = "reset-text"> Reset Password?</p></a>
                        </div>

                        <Button className= "submit-btn">Sign in</Button>
                    </Form>
                     
                    <div className="horizontal-login-bottom-components">
                       <p> Dont have an account yet?</p>
                       <Link to="/signup"><p className= "sign-up-text"> Join RecipeCookbook</p></Link>
                       
                     </div>
                </div>
            </div>
        </div>
    )
}