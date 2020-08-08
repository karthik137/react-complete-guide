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


switchNameHandler = (name) => {
  //console.log('Was clicked!');
  //Do not change the state directly, use setState
  //this.state.person[0].name = 'Kirito Kazuto';
  this.setState(
    {
      person : [
        {
          name : name,
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


nameChangeHandler = (event) => {

  this.setState({
    person : [
      {
        name : 'kirito',
        age : 28
      },
      {
        name : event.target.value,
        age : 29
      },
      {
        name : 'Eugeo',
        age : 27
      }
    ]
  })


}


  render() {
    return (
      <div className="App">
        <h1>Hi, i am a react app</h1>
        <button onClick={() => this.switchNameHandler('Kirito Daijobu')}>Switch Name</button>
          <Person name={this.state.person[0].name} age = {this.state.person[0].age}></Person>
        <Person 
        name={this.state.person[1].name} 
        age = {this.state.person[1].age}
        click={this.switchNameHandler}
        changed={this.nameChangeHandler}>
          My Hobbies: Cooking</Person>
        <Person name={this.state.person[2].name} age = {this.state.person[2].age}></Person>      

      </div>
    );
  
  }
}

export default App;
