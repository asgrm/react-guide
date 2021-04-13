import React, {PureComponent} from 'react';
import Person from './Person/Person';


class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // UNSAFE_componentWillReceiveProps(nextProps){
  //   console.log('[Persons.js] UNSAFE_componentWillReceiveProps');
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   return this.props.persons !== nextProps.persons;
  // }
  getSnapshotBeforeUpdate(revProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'};
  }

  // UNSAFE_componentWillUpdate(nextProps, nextState){
  //   console.log('[Persons.js] UNSAFE_componentWillReceiveProps');
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }
  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
  console.log('[Persons.js] render');
  return this.props.persons.map((item, i) => {
    return (
    <Person
      key={item.id}
      name={item.name}
      age={item.age}
      click={() => this.props.clicked(i)}
      changed={(event)=>this.props.changed(event, item.id)}
      />
      );
  });
  }
}

export default Persons;