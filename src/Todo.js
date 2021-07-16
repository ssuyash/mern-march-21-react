import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            task: "",
            tasks: [
                { name: "take react classes" },
                { name: "Play PUBG" },
            ]
        }
    }

    addNewTask = ()=>{        
        let tasks = [...this.state.tasks]
        let newTask = {name:this.state.task}
        tasks.push(newTask)
        this.setState({tasks, task:""})        
    }


    render() {
        return (
            <div>
                <input
                    value={this.state.task}
                    onChange={(e) => { this.setState({ task: e.target.value }) }}
                />
                <button onClick={this.addNewTask}>Save</button><br />

                <ul>
                    {this.state.tasks.map(task => <li>{task.name}</li>)}
                </ul>

            </div>
        );
    }
}

export default Todo;