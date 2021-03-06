import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28},
      { id: 2, name: 'Manu', age: 29},
      { id: 3, name: 'Stephanie', age: 26}
    ],
    showPersons: false

  }

  togglerPersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (index) => {
    const persons = this.state.persons.slice();
    persons.splice(index,1);
    this.setState({persons:persons});

  }

  nameChangedHandler = (event, id) => {
     const personIndex = this.state.persons.findIndex(p=>{
        return p.id===id;
     })

     const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

   this.setState({
    persons: persons
  })   
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons){
      style.backgroundColor = 'red';
      
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              key={person.id} 
              changed={(event)=>this.nameChangedHandler(event,person.id)} />
          })}
        </div>
    )}
    
    const classes = []
    if(this.state.persons.length <=2 ){
      classes.push('red');

    }
    if(this.state.persons.length <=1 ){
      classes.push('bold')
    }
    var classNames = classes.join(' ');

    return (
      <div className="App">
      <p>Hi, I'm a React App!</p>
      <p className={classNames}>This is really working!</p>
      <button 
        style={style} 
        onClick={this.togglerPersonsHandler}>
      Toggle Persons</button>
      {persons}
      </div>
    );
  }
}

export default App;
