import React, {useState, useEffect} from 'react'
import TodoFn from './Totosfn.js'
import Persons from './Persons.js'
//'hooks'

import Parent from './Parent'

export default function App() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    //callbackFn, depency list / watch list
    useEffect(()=>{
        console.log("Change in Name")
    }, [name])


    useEffect(()=>{
        console.log("Component Mount Done")
    }, [])


    useEffect(()=>{
        console.log("Change in Age")
    }, [age])

    let changeName = ()=>{
        setName("suyash")
    }

    let changeAge = ()=>{
        setAge(27)
    }
 

    return (
        <div>
            <Parent/>
            {/* <Persons/> */}
            {/* <TodoFn/>
           Name : {name} || Age : {age}
            <button onClick={changeName}>change Name</button>
            <button onClick={changeAge}>change Age</button> */}
        </div>
    )
}


