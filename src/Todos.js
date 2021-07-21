import React, { Component } from 'react'
import axios from 'axios'

export default class Todos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [
                {
                    "userId": 3,
                    "id": 48,
                    "title": "sit reprehenderit omnis quia",
                    "completed": false
                },
            ]
        }
    }

    fetchData = ()=>{
        let url = "https://jsonplaceholder.typicode.com/todos"
        
        axios.get(url).then(res=>{
            console.log(res)
            let {data} = res
            this.setState({todos:data})
        }).catch(err=>{
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
                </ul>

                <button onClick={this.fetchData}>
                    Get Data from server
                </button>

            </div>
        )
    }
}
