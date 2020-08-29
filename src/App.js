import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
import styled from 'styled-components';
// import Radium, {StyleRoot} from 'radium'

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red':'green'};
  color:white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt ? 'salmon':'lightgreen'};
    color: black;
  }
`


class App extends Component {
  state = {
    person : [
      {
        id: '1',
        name : 'Kirito',
        age : 28
      },
      {
        id: '2',
        name : 'Asuna',
        age : 29
      },
      {
        id: '3',
        name : 'Eugeo',
        age : 26
      }
    ],
    otherState: 'Some other Value',
    showPersons: false
  }


// switchNameHandler = (name) => {
//   //console.log('Was clicked!');
//   //Do not change the state directly, use setState
//   //this.state.person[0].name = 'Kirito Kazuto';
//   this.setState(
//     {
//       person : [
//         {
//           name : name,
//           age : 28
//         },
//         {
//           name : 'Asuna',
//           age : 29
//         },
//         {
//           name : 'Eugeo',
//           age : 27
//         }
//       ]
//     }
//   )
// }


deletePersonHandler = (personIndex) => {
  //const persons  = this.state.person;
  // persons.splice(personIndex, 1);
  // this.setState({
  //   person: persons
  // });
  //create copy of the state, change the copy and then update the state
  const persons = [...this.state.person];
  persons.splice(personIndex, 1);
  this.setState({
    person: persons 
  });

}


nameChangeHandler = (event, id) => {
  const personIndex = this.state.person.findIndex(p => {
    return p.id === id;
  });

  const person = {
    ...this.state.person[personIndex]
  };

  //alternative approach
  //const person = Object.assign({}, this.state.person[personIndex]);
  person.name = event.target.value;

  const persons = [...this.state.person];
  persons[personIndex] = person;

  this.setState({
    person : persons
  })


}

togglePersonHandler = () => {

  //This will merge the state. NOT REPLACE
  const doesShow = this.state.showPersons;
  this.setState({
    showPersons: !doesShow
  });
}



  render() {

    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };


    //default
    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div >
          {
            this.state.person.map((person, index) => {
              return <Person 
                click={ () => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}/>
            })
          }
          {/* <Person 
          name={this.state.person[1].name} 
          age = {this.state.person[1].age}
          click={this.switchNameHandler}
          changed={this.nameChangeHandler}>
            My Hobbies: Cooking</Person>
          <Person name={this.state.person[2].name} age = {this.state.person[2].age}></Person> */}
        </div>
      );

      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    //const classes = [].join(' ');
    const classes = [];
    if(this.state.person.length <= 2){
      classes.push('red')
    }

    if(this.state.person.length <= 1){
      classes.push('bold'); //classes = ['red', 'bold']
    }

    return (
      // <StyleRoot>
      // <div className="App">
      //   <h1>Hi, i am a react app</h1>
      //   <p className={classes.join(' ')}> This is a paragraph</p>
      //   <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
      //     {/* <Person name={this.state.person[0].name} age = {this.state.person[0].age}></Person> */}
      //     {persons}
      // </div>
      // </StyleRoot>
      <div className="App">
        <h1>Hi, i am a react app</h1>
        <p className={classes.join(' ')}> This is a paragraph</p>
        {/* <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button> */}
        <StyledButton alt={this.state.showPersons}  onClick={this.togglePersonHandler}>Toggle Persons</StyledButton>

         
          {/* <Person name={this.state.person[0].name} age = {this.state.person[0].age}></Person> */}
          {persons}
      </div>
    );
  
  }
}

export default App;
