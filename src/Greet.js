import React, { Component } from 'react';

class Greet extends Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                Greet Component
                {this.props.user.name}                
            </div>
        );
    }
}

export  default Greet;