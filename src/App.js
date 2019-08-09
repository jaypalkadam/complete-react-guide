import React ,{ Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'
// function App {
//   return () {
//     return React.createElement('div') 
//   }
// }


class App extends Component{
  render(){
    return(
       <div className="app">
         <h1>this is the dummy class</h1>
         <p> This is really working nice</p>
         <Person name="jhon" age="25"></Person>
         <Person name="Max" age="5">
           This is the my dynamic Component
         </Person>
         <Person name="apple" age="10"></Person>
       </div>

    )
      //return React.createElement('div', {className:'app'}, React.createElement('h1',null,'This work now automatically'))
  }
}

export default App;
