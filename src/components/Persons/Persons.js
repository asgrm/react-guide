import React from 'react';
import Person from './Person/Person';

const persons = props => {
  console.log('[Persons.js] render');
  return props.persons.map((item, i) => {
    return (
    <Person
      key={item.id}
      name={item.name}
      age={item.age}
      click={() => props.clicked(i)}
      changed={(event)=>props.changed(event, item.id)}
      />
      );
  });
};

export default persons;