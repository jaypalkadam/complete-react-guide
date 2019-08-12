import React ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
// function App {
//   return () {
//     return React.createElement('div') 
//   }
// }


const App = props => {

   const [PersonState, setPersonSate] = useState({

      persons:[
        {name:'max',age:27},
        {name:'royal',age:87},
        {name:'gogo',age:47}
      ],
      otherState:'some other value'
  });

  const switchNameHandler = () => {
      //console.log('Was clicked');
      setPersonSate({
        persons:[
          {name:'maxmilliam',age:27},
          {name:'royal',age:87},
          {name:'gogo',age:38}
        ]
      })    
    }

    return(
       <div className="app">
         <h1>this is the dummy class</h1>
         <p> This is really working nice</p>
         <button onClick={switchNameHandler} >Switch Name</button>
         <Person name={PersonState.persons[0].name} age={PersonState.persons[0].age}></Person>
         <Person name= {PersonState.persons[1].name} age={PersonState.persons[1].age}>
           This is the my dynamic Component
         </Person>
         <Person name={PersonState.persons[2].name} age={PersonState.persons[2].age}></Person>
       </div>
    )
      //return React.createElement('div', {className:'app'}, React.createElement('h1',null,'This work now automatically'))
  }


export default App;


// state = {
//   persons:[
//     {name:'max',age:27},
//     {name:'royal',age:87},
//     {name:'gogo',age:47}
//   ],
//   otherState:'some other value'
// // }
// switchNameHandler = () => {
//   //console.log('Was clicked');
//   this.setState({
//     persons:[
//       {name:'maxmilliam',age:27},
//       {name:'royal',age:87},
//       {name:'gogo',age:38}
//     ]
//   })

// }