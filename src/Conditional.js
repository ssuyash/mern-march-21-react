import React, { Component } from 'react'

export default class Conditional extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    toggleLogin = ()=>{
        let {isLoggedIn} = this.state
        this.setState({isLoggedIn:!isLoggedIn})
    }
    
    render() {
        
        return (
            <div>
                {this.state.isLoggedIn ? <h1>Hello Milan</h1> : <h1>please login</h1>}
                <button onClick={this.toggleLogin}>{this.state.isLoggedIn ? 'Log out' : 'Log In'}</button>
            </div>
        )
    }
}
