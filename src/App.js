import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
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
        <Person name="kirito" age = "17"></Person>
        <Person name="Asuna" age = "18">My Hobbies: Cooking</Person>
        <Person name="Eugeo" age = "16"></Person>
        

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
