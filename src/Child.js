import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     return {count:nextProps.count}
    // }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.count == this.props.count){
            return false
        }
    }

    componentWillUnmount(){
        console.log("kar chale hum fida jaane tan saathiyon")
    }
    
    
    
    render() {
        console.log("child is re-rendering")
        return (
            <div>
                Count : {this.props.count}
            </div>
        );
    }
}

export default Child;