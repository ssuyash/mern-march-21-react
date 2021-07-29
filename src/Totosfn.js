import React, {useState, useEffect} from 'react'
import axios from 'axios'


export default function Totosfn() {
    const [todos, setTodos] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    let fetchData = ()=>{
        setIsLoading(true)
        axios.get("https://jsonplaceholder.typicode.com/todos").then(data=>{
            setTodos(data.data)
            setIsLoading(false)
        }).catch(err=>{
            setIsLoading(false)
        })
    }

    useEffect(()=>{
        fetchData()
    }, [])
  
    return (
        <div>
            {isLoading ? "Loading" :  <ul>
                    {todos && todos.map(todo => <li>{todo.title}</li>)}
                </ul>
            }

            <button onClick={fetchData}>FetchData</button>
        </div>
    )
}
