import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {


    return (
        <div>
            <h1>Pizza Pizza</h1>
            <Link to={`/PizzaForm`} >
                <button>Order Pizza</button>
            </Link>
        </div>
    )

}

export default Homepage