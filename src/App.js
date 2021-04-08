import React, { Component } from 'react';

import classes from './App.css';
import Person from './Person/Person';



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
    let btnClass = '';

    if(this.state.showPersons) {  

      btnClass = classes.Red;
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
    
    const assignedClasses = [];
    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonHandler}>Toogle Persons</button>
        {persons}
    </div>      
    );
  }
}

export default App;