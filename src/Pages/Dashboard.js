import React, {useState, useEffect, useContext} from 'react'
import Leftnav from '../components/Leftnav'

import {appContext} from '../App';


export default function Dashboard() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(true)
    const appCtx = useContext(appContext)
    console.log(appCtx)

    return (
     

        <div className="container-fluid">
            <div className="row ">
                <div className="col-md-12 bg-primary py-3">
                    Header {appCtx.count}
                    <button onClick={()=>appCtx.setCount(appCtx.count+1)}>INcrease from Dashbaord</button>
                    
                    <button className="btn btn-danger" onClick={()=>setIsSideBarOpen(!isSideBarOpen)}> ||| </button>
                </div>

                {isSideBarOpen && <Leftnav/>}
            
                
                <div className={`bg-info vh-100 ${isSideBarOpen ? 'col-md-10' : 'col-md-12'}`}>
                    <div className="row">
                        <div className="col-md-12 bg-danger">
                            Sub Navigation
                        </div>
                    </div>
                    main Body
                </div>
            </div>
            
        </div>
    )
}
