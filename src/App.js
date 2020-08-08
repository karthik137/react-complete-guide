import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    person : [
      {
        name : 'Kirito',
        age : 28
      },
      {
        name : 'Asuna',
        age : 29
      },
      {
        name : 'Eugeo',
        age : 26
      }
    ]
  }


switchNameHandler = () => {
  //console.log('Was clicked!');
  //Do not change the state directly, use setState
  //this.state.person[0].name = 'Kirito Kazuto';
  this.setState(
    {
      person : [
        {
          name : 'Kirito Kazuto',
          age : 28
        },
        {
          name : 'Asuna',
          age : 29
        },
        {
          name : 'Eugeo',
          age : 27
        }
      ]
    }
  )
}

  render() {
    return (
      <div className="App">
        <h1>Hi, i am a react app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={this.state.person[0].name} age = {this.state.person[0].age}></Person>
        <Person name={this.state.person[1].name} age = {this.state.person[1].age}>My Hobbies: Cooking</Person>
        <Person name={this.state.person[2].name} age = {this.state.person[2].age}></Person>      

      </div>
    );
  
  }
}

export default App;
