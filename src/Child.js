import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
        console.log("Child :Constructor ")
        super(props)
    
        this.state = {
             
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log("Child : getDerivedStateFromProps ")
        return null
    }


    componentDidMount(){
        console.log("Child : ComponentDidMount")
    }
    
    render() {
        console.log("Child : render")
        return (
            <div>
                
            </div>
        )
    }
}
