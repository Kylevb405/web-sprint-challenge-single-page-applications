import React from "react";
import { Route, Switch } from 'react-router-dom'

import Homepage from './Components/Homepage'
import PizzaForm from './Components/PizzaForm'
import Confirmation from './Components/Confirmation'


const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>

      {/* <Switch> */}
        <Route exact path='/' component={Homepage} />      
        <Route exact path='/PizzaForm' component={PizzaForm} />
        <Route exact path='/PizzaForm/Confirmation' component={Confirmation} />
      {/* </Switch> */}
    </>
  );
};
export default App;
