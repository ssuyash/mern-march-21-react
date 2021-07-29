import React, { Component } from 'react';
import Todos from './Todos'
import Child from './Child'

class App extends Component {
  constructor(props) {
    console.log("APP : Constructor")
    super(props)
  
    this.state = {
       point:0,
       isVisible:false
    }

    this.increasePointer = this.increasePointer.bind(this)

  }


//whenever we want to put data of props into state, in that case we use this method
static getDerivedStateFromProps(props, state){
  console.log("APP : getDerivedStatedFromProps")
  return {
    point:200
  }
}


componentDidMount(){
  console.log("APP : componentDidMount")
}

increasePointer(){
  console.log("we are going to increase the pointer")
  let {point} = this.state;
  this.setState({point:point+1})
}
  
render() {
    console.log("APP : render")
    
    return (
      <div>
        {this.state.isVisible && <Child/>}

       <button onClick={()=>{this.setState({isVisible:true})}}>Show</button>
        {/* point value is : {this.state.point}<br/>
        <button onClick={this.increasePointer}>Increment</button> */}
      </div>
    );
  }



}

export default App;