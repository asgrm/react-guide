import React, {Component} from 'react';
import Aux from '../../../hoc/Auxilary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';


class Person extends Component {
  // <div className={classes.Person}>

  render(){
    console.log('[Person.js] render');
    return <Aux>
      <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} Years old!</p>
      <p>{this.props.children}</p>
      <input type="text" onChange={this.props.changed} value={this.props.name}/>
    </Aux>

  }
}

export default withClass(Person, classes.Person);