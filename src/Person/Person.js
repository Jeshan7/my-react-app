import React from 'react';
import classes from './Person.css';
// import Radium from 'radium';


const person = (props) => {
  
    return (
      <div className = {classes.Person}>
        <p onClick={props.click}>Hi, My name is {props.name} and i am {props.age} years old.</p>
        <p>{props.children}</p> 
        <input id="in" type="text" onChange = {props.changedName} value={props.name}/>  
      </div>
    )
}

export default person;