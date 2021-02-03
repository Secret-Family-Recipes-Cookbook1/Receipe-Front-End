import React, { useState, useEffect } from "react";
import { Form,  FormGroup, Label, Input, Button,   } from 'reactstrap';
import schema from '../validation/recipeValidation'
import * as yup from 'yup';
import NavBar from "../navigation/navbar"
import  './recipe.css'

export default function Recipe() {

    const [recipeFormState , setrecipeFormState] = useState({
      title: "",
      source: "",
      ingredients: "",
      instructions: "",
      category: "",
      photo: "",
     })

    const [errors, setErrors] = useState({
        title: "",
        source: "",
        ingredients: "",
        instructions: "",
        category: "",
        photo: "",
       })

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
        setrecipeFormState({...recipeFormState, [name]: valueChecked})
    }

    const submit = event => {}

    useEffect( () => {
        schema.isValid(recipeFormState).then(valid => setDisabled(!valid))
    }, [recipeFormState])    

    return (
        <div>
            <NavBar />
            <div className="recipe-form">
                <Form className='recipe-form-container'
                    onSubmit={submit} >

                    <FormGroup>
                        <Label>Title</Label>
                        <Input
                            name='title'
                            type='text'
                            onChange={change}
                            value={recipeFormState.title}
                            className="recipe-form-control"
                            placeholder='enter Recipe Title'
                        />
                        <div className='error-msg' style={{ color: 'red' }}>
                            <div>{errors.title}</div>
                        </div>
                    </FormGroup>

                    <div className="space-div"></div>

                    <FormGroup>
                        <Label>Source</Label>
                        <Input
                            name='source'
                            type='text'
                            onChange={change}
                            value={recipeFormState.source}
                            className="recipe-form-control"
                            placeholder='enter Recipe Source'
                        />
                        <div className='error-msg' style={{ color: 'red' }}>
                            <div>{errors.source}</div>
                        </div>
                    </FormGroup>

                    <div className="space-div"></div>

                    <FormGroup>
                        <Label>Ingredients</Label>
                        <Input
                            name='ingredients'
                            type='textarea'
                            onChange={change}
                            value={recipeFormState.ingredients}
                            className="recipe-form-control-text-area"
                            placeholder='enter Recipe Ingredients'
                        />
                        <div className='error-msg' style={{ color: 'red' }}>
                            <div>{errors.ingredients}</div>
                        </div>
                    </FormGroup>

                    <div className="space-div"></div>

                    <FormGroup>
                        <Label>Instructions</Label>
                        <Input
                            name='instructions'
                            type='textarea'
                            onChange={change}
                            value={recipeFormState.instructions}
                            className="recipe-form-control-text-area"
                            placeholder='enter Recipe Instructions'
                        />
                        <div className='error-msg' style={{ color: 'red' }}>
                            <div>{errors.instructions}</div>
                        </div>
                    </FormGroup>

                    <div className="space-div"></div>

                    <FormGroup>
                        <Label >Category</Label>
                        <Input type="select" onChange={change} name="category" value={recipeFormState.category}>
                            <option value=''>----Select----</option>
                            <option value="category1">10 -- category 1--</option>
                            <option value="category2">20 -- category 2--</option>
                            <option value="category3">30 -- category 3 add how ever many you want --</option>
                        </Input>
                        <div className='error-msg' style={{ color: 'red' }}>
                            <div>{errors.category}</div>
                        </div>
                    </FormGroup>

                    <div className="space-div"></div>

                    <FormGroup>
                        <Label >Recipe Picture</Label>
                        <Input type="file" name="file" accept="image/*" onChange={change} value={recipeFormState.photo} />
                    </FormGroup>

                    <Button disabled={disabled} className="submit-btn">Add recipe</Button>
                </Form>
            </div>
        </div>
     )
}