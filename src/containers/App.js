import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxilary';

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

  // componentWillMount() {
  //   console.log('[App.js] UNSAFE_componentWillMount');
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[App.js] componentDidUpdate');
  }

  state = {
    persons: [
      {id: 'f2db',name: 'asgrm', age: 28},
      {id: 'a00b',name: 'Max', age: 28},
      {id: 'defa',name: 'Stephanie', age: 26},
    ],
    otherState: 'other value',
    showPersons: false,
    showCockpit: true,
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
      <Aux>
        <button onClick={()=>{
          this.setState({showCockpit: !this.state.showCockpit});
        }}>Remove Cockpit</button>

        {this.state.showCockpit &&  <Cockpit
          title={this.props.appTitle}
          personsLength={this.state.persons.length}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonHandler}
        /> }

        {persons}
    </Aux>      
    );
  }
}

export default withClass(App, classes.App);