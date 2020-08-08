import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

//class App extends Component {
const app = props =>{
  
  const [personState, setPersonsState] = useState({
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
    ],
    otherState: "Some other value"
  })

console.log("printing personState",personState);
console.log("printing setPersonState",setPersonsState);

const switchNameHandler = () => {
  //console.log('Was clicked!');
  //Do not change the state directly, use setState
  //personState.person[0].name = 'Kirito Kazuto';
  setPersonsState(
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








  //render() {
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
        <button onClick={switchNameHandler}>Switch Name</button>
        {/* <Person name="kirito" age = "17"></Person>
        <Person name="Asuna" age = "18">My Hobbies: Cooking</Person>
        <Person name="Eugeo" age = "16"></Person> */}
          <Person name={personState.person[0].name} age = {personState.person[0].age}></Person>
        <Person name={personState.person[1].name} age = {personState.person[1].age}>My Hobbies: Cooking</Person>
        <Person name={personState.person[2].name} age = {personState.person[2].age}></Person>      

      </div>
    );
   
   // This will take h1 as text
   // return React.createElement('div', null, 'h1','Hi,iam react app');


   //return React.createElement('div', null, React.createElement('h1',null, 'Hi this is kirito'));

   //Apply css
   //return React.createElement('div', {className : 'App'}, React.createElement('h1',null, 'Hi this is kirito'));

  //}
}

 export default app;

// state = {
//   person : [
//     {
//       name : 'Kirito',
//       age : 28
//     },
//     {
//       name : 'Asuna',
//       age : 29
//     },
//     {
//       name : 'Eugeo',
//       age : 26
//     }
//   ]
// }


// switchNameHandler = () => {
// //console.log('Was clicked!');
// //Do not change the state directly, use setState
// //personState.person[0].name = 'Kirito Kazuto';
// this.setState(
//   {
//     person : [
//       {
//         name : 'Kirito Kazuto',
//         age : 28
//       },
//       {
//         name : 'Asuna',
//         age : 29
//       },
//       {
//         name : 'Eugeo',
//         age : 27
//       }
//     ]
//   }
// )
// }