import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hi, I'm a React App!</h1>
      <h1>This is really working!</h1>
      <Person name="Max" age="28" />
      <Person name ="Manu" age="29" />
      </div>
    );
  }
}

export default App;
