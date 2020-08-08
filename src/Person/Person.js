import React from 'react'


/**
 * A component is just a function which returns jsx
 */

 
//  function person() {
//      return
//  }

// ES6 equivalent to function
const person = (props) => {

// return <p>I am {props.name} a Person and I am {Math.floor(Math.random() * 20)} years old!</p>
return (
        <div>
            <p onClick={props.click}>I am {props.name} a Person and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>

)

}


export default person;