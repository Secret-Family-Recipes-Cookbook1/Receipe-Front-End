import React from "react";
import  './signup.css'
import { Link } from "react-router-dom";
import { Form,  FormGroup, Label, Input, Button   } from 'reactstrap';

export default function Signup() {
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
              <h3>Create your account</h3>
          </div>

          <div className="login-form">
              <Form className='form-container'
                  onSubmit={submit} >
                    
             <div className = "sign-up-row">
                  <FormGroup>
                      <Label>First name</Label>
                      <Input
                          name='name'
                          type='text'
                          className="form-control-signup"
                          placeholder='enter email'
                          maxLength='35'
                      />
                  </FormGroup>
                  <div className = "space-div"></div>
                  <FormGroup>
                      <Label>Last name</Label>
                      <Input
                          name='name'
                          type='text'
                          className="form-control-signup"
                          placeholder='enter password'
                      />
                  </FormGroup>
                  </div>

                  <div className = "space-div"></div>

                  <div className = "sign-up-row">
                  <FormGroup>
                      <Label>Email</Label>
                      <Input
                          name='email'
                          type='email'
                          className="form-control-signup"
                          placeholder='enter email'
                          maxLength='35'
                      />
                  </FormGroup>
                  <div className = "space-div"></div>
                  <FormGroup>
                      <Label>Password</Label>
                      <Input
                          name='password'
                          type='password'
                          className="form-control-signup"
                          placeholder='enter password'
                      />
                  </FormGroup>
                  </div>     

                  <div className="horizontal-login-components">
                      <FormGroup check>
                          <Label check 
                           className = "check-box">
                              <Input
                                  onChange={change}
                                  name='remember'
                                  type='checkbox'
                              />{' '}
                              I agree to the Terms, Privacy Policy and Fees
                          </Label>
                      </FormGroup>

                  </div>

                  <Button className= "submit-btn">Sign up</Button>
              </Form>
               
              <div className="horizontal-login-bottom-components">
                 <p> Alredy have an account </p>
                 <Link to="/login"><p className= "sign-up-text"> Login</p></Link>
                 
               </div>
          </div>
      </div>



  </div>
    )

}   