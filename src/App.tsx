import React from 'react';
import classes from "./App.module.css";
import {Form} from "./Components/Form/Form";
import {CreditCard} from "./Components/CreditCard/CreditCard";

function App() {


  return (
    <div className={classes.App}>
      <Form/>
      <CreditCard/>
    </div>
  );
}

export default App;
