import React from 'react'
import {
    BrowserRouter as Router,    
    Route, 
    Switch    
  } from "react-router-dom";

  import {Home, About, Services, Pagenotfound} from './Pages'
  import Nav from './components/Nav'
  import Products from './components/Products'
  import Mcq from './components/Mcq'
  


export default function App() {
    return (
        <Mcq/>

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
