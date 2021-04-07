import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      {name: 'asgrm', age: 28},
      {name: 'Max', age: 28},
      {name: 'Stephanie', age: 26},
    ],
    otherState: 'other value',
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    this.setState({persons: [
      {name: 'Andrii', age: 28},
      {name: newName, age: 28},
      {name: 'Stephanie', age: 27},
    ]
    });
  }; 

  nameChangedHandler = event => {
    this.setState({persons: [
      {name: 'Andrii', age: 28},
      {name: event.target.value, age: 28},
      {name: 'Stephanie', age: 27},
    ]
    });
  };

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    })
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
    };
    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map(item => {
          return <Person
            name={item.name}
            age={item.age}/>
        })}
      </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style}
        onClick={this.togglePersonHandler}>Toogle Persons</button>
        {persons}
       


      </div>
    );
  }
}

export default App;