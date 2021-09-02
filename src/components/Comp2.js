import React, {useContext} from 'react'
import {appContext} from '../App'


export default function Comp2() {
    const appCtx = useContext(appContext)
    
    return (
        <div>
             component 2     
             count from Comp2 {appCtx.count}
             <button onClick={()=>appCtx.setCount(appCtx.count+1)}>inc</button>
        </div>
    )
}
