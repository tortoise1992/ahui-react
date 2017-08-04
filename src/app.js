import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,HashRouter,Match,Link,IndexLink,BrowserRouter} from 'react-router-dom'
import Redux from 'redux'
import A from './modules/a'
import B from './modules/b'
import C from './modules/c'
import './index.css'
class App extends React.Component {
   render(){         
     return(
       
       <div>
         hello ahui
        <p>
          <Link to='/about' className="big">1页面</Link>
          <br/>
          <Link to='/ahui'>2页面</Link>
        </p>
       </div>
     );
   }
 }

 ReactDOM.render(
   <HashRouter history={hashHistory}>
      <div>
          <Route exact path="/" component={App}/>      
          <Route path="/ahui" component={B}/>
          <Route path="/about" component={C}/>   
      </div>            
   </HashRouter>,
   document.getElementById('app')
 )