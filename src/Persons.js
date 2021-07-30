import React, {useState, useEffect} from 'react'
import axios from 'axios'

//hooks
function Persons(props) {
    const [persons, setPersons] = useState(null)
    const [selectedUser, setSelectedUser] = useState(null)
    const [selectedUserData, setSelectedUserData] = useState(null)
    const [isLoadingUserData, setIsLoadingUserData] = useState(false)
    const [userTodos, setUserTodos] = useState(null)
    const [isLoadingUserTodos, setIsLoadingUserTodos] = useState(false)
    
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res=>{
            setPersons(res.data)
        }).catch(err=>{

        })
    }, [])


    let fetchPerson = (userId)=>{
        setIsLoadingUserData(true)
        setSelectedUser(userId)
        setSelectedUserData(null)
        setUserTodos(null)
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res=>{
            setSelectedUserData(res.data)
            setIsLoadingUserData(false)
        }).catch(err=>{

            setIsLoadingUserData(false)
        })
        
    }


    let fetchTodos = ()=>{
        setIsLoadingUserTodos(true)
        axios.get(`https://jsonplaceholder.typicode.com/users/${selectedUser}/todos`).then(res=>{
            setUserTodos(res.data)
            setIsLoadingUserTodos(false)
        }).catch(err=>{

            setIsLoadingUserTodos(false)
        })
    }

    return (
        <div>
            <div>
                <h1>Users</h1>
                {persons && 
                    persons.map(person =><li>
                        {person.name} 
                        <button onClick={()=>fetchPerson(person.id)}>Fetch Details</button>
                    </li>)
                    }
            </div>


{isLoadingUserData ? "Loading User Data" : <div>
            {selectedUser && <div>
                <h1>Person Detail</h1>
                {selectedUserData && <div>
                    Name : {selectedUserData.name} <br/>                  
                    Email : {selectedUserData.email} <br/>                  
                    Phone : {selectedUserData.phone} <br/>                  
                    Website : {selectedUserData.website} <br/>                  
                    company : {selectedUserData.company.name} <br/> <br/>
                    <button onClick={fetchTodos}>Fetch User Todos</button>                 
                </div>}                
            </div>}
    </div>}

{userTodos && (<div>
            {isLoadingUserTodos ? "Loading Todos..." : <div>
                <h1>Todos</h1>
                <ul>
                    {userTodos && userTodos.map(userTodo=><li>{userTodo.title}</li>)}
                </ul>
            </div>}
            </div>)}
        </div>
    )
}

export default Persons
