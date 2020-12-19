import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import Confirmation from './Confirmation'



const formSchema = yup.object().shape({

    customername: yup.string().min(2).required('customername is required'),
    size :  yup.string().required('Please select a size'),
    sauce : yup.string('Original Red is defaulted if no sauce is selected'),
    topping : yup.string(),
    substitute: yup.boolean(),
    specialInstructions : yup.string(),

})

const PizzaForm = () => {

    const [ order, setOrder ] = useState([

    ])

    const [ pizzaState, setPizzaState ] = useState({

        customername: '',
        size : '',
        sauce : 'OriginalRed',
        topping : [],
        substitute: false,
        specialInstructions : '',

    })

    const [ errorState, setErrorState ] = useState({

        customername: '',
        size : '',
        sauce : '',
        topping : '',
        substitute: '',
        specialInstructions : '',

    })

    useEffect(() => {

        formSchema.isValid(pizzaState)
            .then(valid => {
                setButtonDisabled(!valid)
            })

    }, [ pizzaState ] )

    const validate = event => {

        let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        yup
        .reach(formSchema, event.target.name)
        .validate(value)
        .then(valid => {
                    setErrorState({
                        ...errorState, [event.target.name] : ''
                    })
                })
                .catch(error => {
                    setErrorState({
                        ...errorState, [ event.target.name ] : error.errors[0]
                    })
                })
    }

    const inputChange = event => {
        
        console.log(pizzaState);

        event.persist();
        
        validate(event);
        
        let value = event.target.type === 'checkbox' ? event.target.id : event.target.value;
        
        setPizzaState({
            ...pizzaState, [ event.target.name ] : value
        })
    }

    const formSubmit = async event => {

        event.preventDefault()

        setOrder([...order, pizzaState]);

        console.log('Added to Order', order);

        setPizzaState({

            customername: '',
            size : '',
            sauce : '',
            topping : '',
            substitute: false,
            specialInstructions : '',

        })


    }

    const [ buttonDisabled, setButtonDisabled ] = useState(true)

//---------------------------------------------------------------------------------------------------------------------------------------------

    return (

        <form onSubmit = {formSubmit} >
            <h1>Build Your Own Pizza</h1>

            <label htmlFor = 'nameId' >
                Name:
                <input
                    type = 'text'
                    name = 'customername'
                    id = 'nameId'
                    value = {pizzaState.customername}
                    onChange = {inputChange}
                />

                {errorState.customername.length > 0 ? ( <p className='error' > {errorState.customername} </p> ) : null }  

            </label>
            <br></br>
            <label htmlFor = 'sizeId' >
                Choice of Size  Required

                <select
                    name = 'size'
                    id = 'sizeId'
                    value = {pizzaState.size}
                    onChange = {inputChange}
                >
                    <option value='Small' > Small </option>
                    <option value='Medium' > Medium </option>
                    <option value='Large' > Large </option>
                    <option value='Extra-Large' > Extra Large </option>

                </select>

                {errorState.size.length > 0 ? ( <p className='error' > {errorState.size} </p> ) : null }

            </label>
            <br></br>
            <label htmlFor ='sauceId' >
                Choice of sauce

                    {/* Might need to wrap these in labels */}
                
                <input 
                    type = "radio" 
                    id = 'sauceId' 
                    name = 'sauce'
                    value = {pizzaState.sauce}
                    onChange = {inputChange}
                    /> Original Red 

                <input 
                    type="radio" 
                    id = 'sauceId' 
                    name = 'sauce'
                    value = {pizzaState.sauce}
                    onChange = {inputChange}
                    /> Garlic Ranch 

                <input 
                    type="radio" 
                    id = 'sauceId' 
                    name = 'sauce'
                    value = {pizzaState.sauce}
                    onChange = {inputChange}
                    /> BBQ Sauce 
                
                <input 
                    type="radio" 
                    id = 'sauceId' 
                    name = 'sauce'
                    value = {pizzaState.sauce}
                    onChange = {inputChange}
                    /> Spinach Alfredo 

                    

            </label>
            <br></br>
            <label >

                Add Toppings

                <input
                    type = 'checkbox'
                    name = 'topping'
                    id = 'Pepperoni'
                    value = {pizzaState.topping}
                    onChange = {inputChange}
                /> Pepperoni

                <input
                    type = 'checkbox'
                    name = 'topping'
                    id = 'Sausage'
                    value = {pizzaState.topping}
                    onChange = {inputChange}
                /> Sausage

                <input
                    type = 'checkbox'
                    name = 'topping'
                    id = 'Canadian Bacon'
                    value = {pizzaState.topping}
                    onChange = {inputChange}
                /> Canadian Bacon

                <input
                    type = 'checkbox'
                    name = 'topping'
                    id = 'Spicy Italian Sausage'
                    value = {pizzaState.topping}
                    onChange = {inputChange}
                /> Spicy Italian Sausage
                
                {/* <input
                    type = 'checkbox'
                    name = 'topping'
                    id = 'toppingsId'
                    value = {pizzaState.topping}
                    onChange = {inputChange}
                /> Grilled Chicken

                <input
                    type = 'checkbox'
                    name = 'topping'
                    id = 'toppingsId'
                    value = {pizzaState.topping}
                    onChange = {inputChange}
                /> Onions

                <input
                    type = 'checkbox'
                    name = 'topping'
                    id = 'toppingsId'
                    value = {pizzaState.topping}
                    onChange = {inputChange}
                /> Green Pepper

                <input
                    type = 'checkbox'
                    name = 'topping'
                    id = 'toppingsId'
                    value = {pizzaState.topping}
                    onChange = {inputChange}
                /> Diced Tomatos

                <input
                    type = 'checkbox'
                    name = 'topping'
                    id = 'toppingsId'
                    value = {pizzaState.topping}
                    onChange = {inputChange}
                /> Black Olives

                <input
                    type = 'checkbox'
                    name = 'topping'
                    id = 'toppingsId'
                    value = {pizzaState.topping}
                    onChange = {inputChange}
                /> Roasted Garlic

                <input
                    type = 'checkbox'
                    name = 'topping'
                    id = 'toppingsId'
                    value = {pizzaState.topping}
                    onChange = {inputChange}
                /> Artichoke Hearts
                
                <input
                    type = 'checkbox'
                    name = 'topping'
                    id = 'toppingsId'
                    value = {pizzaState.topping}
                    onChange = {inputChange}
                /> Three Cheese

                <input
                    type = 'checkbox'
                    name = 'topping'
                    id = 'toppingsId'
                    value = {pizzaState.topping}
                    onChange = {inputChange}
                /> Pineapple

                <input
                    type = 'checkbox'
                    name = 'topping'
                    id = 'toppingsId'
                    value = {pizzaState.topping}
                    onChange = {inputChange}
                /> Extra Cheese */}

            </label>
            <br></br>
            <label htmlFor = 'substituteId' >
                Choice of substitute
                <input
                    type = 'checkbox'
                    name = 'substitute'
                    id = 'substituteId'
                    value = {pizzaState.substitute}
                    onChange = {inputChange}
                />
            </label>
            <br></br>
            <label htmlFor = 'instructionId' >

                <input
                    type = 'text'
                    name = 'specialInstructions'
                    id = 'instructionId'
                    value = {pizzaState.specialInstructions}
                    onChange = {inputChange}
                />

            </label>
            <br></br>
            <button disabled = {buttonDisabled} > Add to Order </button>

            <Link to ={'/PizzaForm/Confirmation'}>
            <button disabled = {buttonDisabled} > Checkout </button>
            </Link>

            {/* <Confirmation order={order} /> */}

            {order.map(test => (
            <div>
                <div>{test.customername}</div>
                <div>{test.size}</div>
                <div>{test.topping}</div> 
                <div>{test.specialInstructions}</div> 
            </div>
        ))}

        </form>

    )

}

export default PizzaForm