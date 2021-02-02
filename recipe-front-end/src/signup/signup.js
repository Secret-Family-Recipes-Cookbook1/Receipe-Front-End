import React, { useState, useEffect } from "react";
import  './signup.css'
import { Link } from "react-router-dom";
import { Form,  FormGroup, Label, Input, Button   } from 'reactstrap';
import * as yup from 'yup';
import schema from '../validation/signupValidation'

export default function Signup() {


    const [signupFormState , setsignupFormState] = useState({
        firstname: '', 
        lastname: '', 
        email: '', 
        password: '', 
        terms: false,
     })

   const [errors, setErrors] = useState({firstname: '', lastname: '', password: '', terms: ''})
   const [disabled, setDisabled] = useState(true)  

   const setFormErrors = (name, value) => {
    yup.reach(schema, name).validate(value)
    .then( () => setErrors({...errors, [name]: ''}))
    .catch(err => setErrors({...errors, [name]: err.errors[0]}))
    }

     
    const change = event => {
        const { checked, value, name, type } = event.target
        const valueChecked = type === 'checkbox'  ? checked : value
        setFormErrors(name, valueChecked)
        setsignupFormState({...signupFormState, [name]: valueChecked})
    }

    const submit = event => {
        event.preventDefault()
    }

    useEffect( () => {
        schema.isValid(signupFormState).then(valid => setDisabled(!valid))
    }, [signupFormState])
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
                          name='firstname'
                          type='text'
                          onChange={change}
                          value={signupFormState.firstname}
                          className="form-control-signup"
                          placeholder='enter email'
                          maxLength='35'
                      />
                      <div className='error-msg' style={{ color: 'red' }}>
                                <div>{errors.firstname}</div>
                            </div>
                  </FormGroup>

                  <div className = "space-div"></div>
                  
                  <FormGroup>
                      <Label>Last name</Label>
                      <Input
                          name='lastname'
                          type='text'
                          onChange={change}
                          value={signupFormState.lastname}
                          className="form-control-signup"
                          placeholder='enter password'
                      />
                      <div className='error-msg' style={{ color: 'red' }}>
                                <div>{errors.lastname}</div>
                            </div>
                  </FormGroup>
                  </div>

                  <div className = "space-div"></div>

                  <div className = "sign-up-row">
                  <FormGroup>
                      <Label>Email</Label>
                      <Input
                          name='email'
                          type='email'
                          onChange={change}
                          value={signupFormState.email}
                          className="form-control-signup"
                          placeholder='enter email'
                          maxLength='35'
                      />
                      <div className='error-msg' style={{ color: 'red' }}>
                                <div>{errors.email}</div>
                            </div>
                  </FormGroup>
                  <div className = "space-div"></div>
                  <FormGroup>
                      <Label>Password</Label>
                      <Input
                          name='password'
                          type='password'
                          onChange={change}
                          value={signupFormState.password}
                          className="form-control-signup"
                          placeholder='enter password'
                      />
                      <div className='error-msg' style={{ color: 'red' }}>
                                <div>{errors.password}</div>
                            </div>
                  </FormGroup>
                  </div>     

                  <div className="horizontal-login-components">
                      <FormGroup check>
                          <Label check 
                           className = "check-box">
                              <Input
                                  onChange={change}
                                  name='terms'
                                  type='checkbox'
                                  value={signupFormState.terms}
                              />{' '}
                              I agree to the Terms, Privacy Policy and Fees
                          </Label>
                          <div className='error-msg' style={{ color: 'red' }}>
                                <div>{errors.terms}</div>
                            </div>
                      </FormGroup>

                  </div>

                  <Button disabled={disabled}  className= "submit-btn">Sign up</Button>
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