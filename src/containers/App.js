import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  static getDerivedStateFromProps (props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
  componentWillMount() {
    console.log('[App.js] UNSAFE_componentWillMount');
  }
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
    const personIndex = this.state.persons.findIndex(el => {
      return el.id === id
    });
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
    console.log('[App.js] render');
    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons
          persons={this.state.persons}
          changed={this.nameChangedHandler}
          clicked={this.deletePersonHandler}
        />;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonHandler}
        />        
        {persons}
    </div>      
    );
  }
}

export default App;