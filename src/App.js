import React, { Component } from 'react';
import  Greet from './Greet'
import Todos from './Todos'
import Contact from './Contact'
import Balancesheet from './Balancesheet'
import Conditional from './Conditional'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name:"",
       lastName:"kumar",

    }
  }

  handleClick = ()=>{
    this.setState({name:"Brijesh"})
  }  

  render() {  
    return (
      // <Conditional/>
      
      //  <Balancesheet/>
      // <Contact/>
      <Todos/>
      // <div>
      //     <input 
      //     type="text" 
      //     value={this.state.name}
      //     onChange={(e)=>{this.setState({name:e.target.value})}}
      //     />
      //     Name : {this.state.name} <br/>
      //     Last Name: {this.state.lastName}<br/>
      //     <button onClick={this.handleClick}>change name</button>
      //     {/* <Greet user={user}/> */}
      // </div>
    );
  }
}

export default App;