import React, { Component } from 'react';


class App extends Component {
    constructor(props) {
        console.log("Constructor : APP")
        super(props)
    
        this.state = {
             count:0
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
        return false
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("APP : getSnapshotBeforeUpdate")     
        return null         
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("APP : componentDidUpdate")     
    }   
    
    
    render() {
        console.log("APP : render")     

        
        return (
            <div>
                {this.state.count}
                <button onClick={()=>this.inc()}>inc</button>                
            </div>
        );
    }

    inc = ()=>{
        let {count} = this.state
        this.setState({count:count+1})
    }
}

export default App;