import React from 'react'
const person = (props)=>{
    return( 
    <div>
        <p>I am {props.name} nice person and I am {props.age} years old</p>
        <p> {props.children}</p>
    </div> 
    ) 
}

export default person; 



//https://blog.angularindepth.com/templaterefs-are-angulars-render-props-a2b97cbcc362