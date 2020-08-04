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
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <h1>Hi, i am a react app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        {/* <Person name="kirito" age = "17"></Person>
        <Person name="Asuna" age = "18">My Hobbies: Cooking</Person>
        <Person name="Eugeo" age = "16"></Person> */}
          <Person name={this.state.person[0].name} age = {this.state.person[0].age}></Person>
        <Person name={this.state.person[1].name} age = {this.state.person[1].age}>My Hobbies: Cooking</Person>
        <Person name={this.state.person[2].name} age = {this.state.person[2].age}></Person>      

      </div>
    );
   
   // This will take h1 as text
   // return React.createElement('div', null, 'h1','Hi,iam react app');


   //return React.createElement('div', null, React.createElement('h1',null, 'Hi this is kirito'));

   //Apply css
   //return React.createElement('div', {className : 'App'}, React.createElement('h1',null, 'Hi this is kirito'));

  }
}

export default App;
