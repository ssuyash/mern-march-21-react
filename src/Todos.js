import React, { Component } from 'react'
import axios from 'axios'

export default class Todos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [],
            isLoading: false
        }
    }

    fetchData = ()=>{
        this.setState({isLoading:true})        
        let url = "https://jsonplaceholder.typicode.com/todos"
        
        axios.get(url).then(res=>{
            console.log(res)
            let {data} = res
            this.setState({todos:data, isLoading:false})
        }).catch(err=>{
            console.log(err)
            this.setState({isLoading:false})        
        })
    }

    componentDidMount(){
        this.fetchData()
    }

    render() {
        return (
            <div>
                {this.state.isLoading ? "Loading..." : <ul>
                    {this.state.todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
                </ul>}

                <button onClick={this.fetchData}>
                    Get Data from server
                </button>

            </div>
        )
    }
}
