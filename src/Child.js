import React, {useState, useEffect} from 'react'

function Child() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("Sourabh")

    useEffect(()=>{
        console.log("from use effect : every state Update")
    })

    useEffect(()=>{
        console.log("from use effect : as componentDidMount")
    }, [])

    useEffect(()=>{
        console.log("from use effect : change in Name state")
    }, [name])

    useEffect(()=>{
        console.log("from use effect : change in count state")
    }, [count])

    useEffect(()=>{
        console.log("from use effect : change in count state")
    }, [count, name])

    





    return (
        <div>
           <h1>Hello {name}  {count}</h1>
           <button onClick={()=>setCount(count+1)}> Increase Counter</button>
           <button onClick={()=>setName("Suyash")}> Change Name</button>
        </div>
    )
}

export default Child
