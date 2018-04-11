import React from 'react';
import './Person.css';

const person = (props) => {
  const style = {
    '@media (min-width: 500px)' : {
      width: '450px'
    }
  }

  return (
    <div className="Person">
      <h1 onClick={props.click}>My name is {props.name} and I am { props.age} years old!</h1>
      <p onClick={props.click}>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name}/>
    </div>

  )
};

export default person;