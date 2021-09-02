import React, {useState} from 'react'
import {
    BrowserRouter as Router,    
    Route, 
    Switch    
  } from "react-router-dom";

  import {Home, About, Services, Pagenotfound} from './Pages'
  import Nav from './components/Nav'
  import Products from './components/Products'
  import Mcq from './components/Mcq'
  import  Comp0  from './components/Comp0'
  import Dashboard from './Pages/Dashboard'
  import './assets/css/custom.css'
  import {layoutContext} from './context'
  import {useSelector} from 'react-redux'

  import {useDispatch} from 'react-redux'
  import * as countActionCreators from './redux/action-creator/index'
  import {bindActionCreators} from 'redux'





  

export const appContext = React.createContext()

export default function App() {
    const [isSideBarOpen, setIsSideBarOpen] = React.useState(false)
    const [count, setCount] = useState(0)
    const dispatch = useDispatch()

    //dispatch({type:"INC", payload:[]})

    const appState = useSelector((storeData)=>{
        return storeData.count
    })

    const  {increament, decrement, incByValue} = bindActionCreators(countActionCreators, dispatch)
    //console.log(AC)
     
    console.log("app state is  : ", appState)

    return (
        <>
        count from app Is : {appState}
        <button onClick={increament}>increase from app</button>
        <button onClick={()=>incByValue(5)}>increase from app by 5</button>
         </>

        

        // <Router>
        //     <Nav/>       
        //     <Switch>
        //         <Route path="/" component={Home} exact/>
        //         <Route path="/about" component={About}/>
        //         <Route path="/service" component={Services}/>
        //         <Route path="*" component={Pagenotfound}/>
        //     </Switch>            
        // </Router>
        



    )
}


