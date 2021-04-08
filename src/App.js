import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${props => props.alternative ? 'red' : 'green'};
  color: #fff;
  font: inherit;
  border: 1px solid blue;
  outline: none;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alternative ? 'salmon' : 'lightgreen'};
    color: #000;
  }
`;

class App extends Component {
  state = {
    persons: [
      {id: 'f2db',name: 'asgrm', age: 28},
      {id: 'a00b',name: 'Max', age: 28},
      {id: 'defa',name: 'Stephanie', age: 26},
    ],
    otherState: 'other value',
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(el => el.id === id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person
    this.setState({persons: persons});
  };

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    })
  };

  render() {
    let persons = null;

    if(this.state.showPersons) {      
      persons = (
        <div>
        {this.state.persons.map((item, i) => {
          return <Person
            key={item.id}
            name={item.name}
            age={item.age}
            click={() => this.deletePersonHandler(i)}
            changed={(event)=>this.nameChangedHandler(event, item.id)}
            />
        })}
      </div> 
      );
    }
    
    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className="button" onClick={this.togglePersonHandler}>Toogle Persons</button>
        {persons}
    </div>      
    );
  }
}

export default App;