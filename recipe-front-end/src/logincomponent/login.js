import React from "react";
import  './login.css'
import logo from '../logo.svg';
import Signup from '../signup/signup'
import { Router, Route, Switch, Link } from "react-router-dom";
import { Form,  FormGroup, Label, Input, Button   } from 'reactstrap';


export default function Login() {

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
                        src={logo}
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
                            <Label>username</Label>
                            <Input
                                name='name'
                                type='text'
                                class="form-control"
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
                                class="form-control"
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
    
        <Switch>
          <Route exact path="/signup" ><Signup/></Route>
          <Route path="/login" ><Login/></Route>
        </Switch>

        </div>
       
    )
}