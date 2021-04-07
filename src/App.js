import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'asgrm', age: 28},
      {name: 'Max', age: 28},
      {name: 'Stephanie', age: 26},
    ],
  });
  const [otherState, setOtherState] = useState('other value');

  const switchNameHandler = () => {
    setPersonsState({persons: [
      {name: 'Andrii', age: 28},
      {name: 'Maximilian', age: 28},
      {name: 'Stephanie', age: 27},
    ],
    });
  } 
  console.log(personsState, otherState);

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/> 
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/> 
    </div>  
  );
    
}

export default app;

// class App extends Component {
//   state = {
//     persons: [
//       {name: 'asgrm', age: 28},
//       {name: 'Max', age: 28},
//       {name: 'Stephanie', age: 26},
//     ],
//     otherState: 'other value',
//   }

//   switchNameHandler = () => {
//     // console.log('clicked');
//     this.setState({persons: [
//       {name: 'Andrii', age: 28},
//       {name: 'Maximilian', age: 28},
//       {name: 'Stephanie', age: 27},
//     ]
//     });
//   } 

//   render() {
//     return (
//       <div className="App">
//         <h1>Hi, I'm a React App</h1>
//         <p>This is really working!</p>
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/> 
//         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
//         <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/> 
//       </div>
      
//     );
//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!'));
//   }
// }

// export default App;