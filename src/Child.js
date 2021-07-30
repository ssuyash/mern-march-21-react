import React from 'react'

function Child({count, setCount}) {
    return (
        <div>
            {count}
            <button onClick={()=>setCount(count+1)}>Increase</button>
        </div>
    )
}

export default Child
