import React from 'react'
import { Link } from 'react-router-dom'



const Confirmation = (props) => {

    return (

        <div>
            
            <Link to = {`/`} >
                <button>Homepage</button>
            </Link>
            
            <h1>Take your pizza and leave</h1>


        </div>

    )

}

export default Confirmation



    //   {/* <Switch> */}

    //   {/* <Homepage/> */}
    //     {/* <Route exact path='/' component={Homepage} />       */}
    //     {/* <Route  path='/PizzaForm' component={PizzaForm} /> */}
    //     {/* <Route  path='/PizzaForm/Confirmation' component={Confirmation} /> */}
    //   {/* </Switch> */}