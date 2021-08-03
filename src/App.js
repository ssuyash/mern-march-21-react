import React, { Component } from 'react';
import Child from './Child'

class App extends Component {
    constructor(props) {
        console.log("Constructor : APP")
        super(props)
    
        this.state = {
             count:0,
             show:true
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("APP : getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("APP : componentDidMount")        
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("APP : shouldComponentUpdate")        
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("APP : getSnapshotBeforeUpdate")     
        return null         
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("APP : componentDidUpdate")     
    }   
    
    // shouldComponentUpdate(nextProps, nextState) {
    //     if(nextState.count == this.state.count){
    //         return false
    //     }
    // }
    
    
    render() {
        console.log("APP : render")     
        return (
            <div>
               {this.state.show &&  <Child count={this.state.count}/>}<br/>
                Parent Count {this.state.count}<br/>

                <button className="btn btn-primary" onClick={()=>this.inc()}>inc</button>                
            </div>
        );
    }

    inc = ()=>{
        let {count} = this.state
        this.setState({count, show:false})
    }
}

export default App;



//Pure Components
//Error Boundaries
//styledComponent

//routing
//contenxt API
//Ref
