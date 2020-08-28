import React from 'react'
import './Person.css';
//import Radium from 'radium'
import styled from 'styled-components'
/**
 * A component is just a function which returns jsx
 */

 
//  function person() {
//      return
//  }

// ES6 equivalent to function

const StyledDiv = styled.div`
.Person {
    width: 70%;
    margin: auto;
    border: 2px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
}

'@media (min-width: 500px)': {
    width: '450px'
}
`

const person = (props) => {
const style = {
    '@media (min-width: 500px)': {
        width: '450px'
    }
}
// return <p>I am {props.name} a Person and I am {Math.floor(Math.random() * 20)} years old!</p>
return (
        // <div className="Person" style={style}>
        //     <p onClick={props.click}>I am {props.name} a Person and I am {props.age} years old!</p>
        //     <p>{props.children}</p>
        //     <input type="text" onChange={props.changed} value={props.name}/>
        // </div>

        <StyledDiv>
            <p onClick={props.click}>I am {props.name} a Person and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>

        </StyledDiv>
        )

}


export default person;