import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,HashRouter,Match,Link,IndexLink,BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
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
function reducer1(oldState={complete:false},action){
  console.log(oldState)
  console.log(action)
  // oldState={complete:false}
  if(action.type == 'ok'){
    return {complete:true}
  }else{
    return oldState
  }
}

var store=createStore(reducer1)
 ReactDOM.render(
   <Provider store={store}>
    <HashRouter history={hashHistory}>
      <div>
          <Route exact path="/" component={App}/>      
          <Route path="/ahui" component={B}/>
          <Route path="/about" component={C}/>   
      </div>            
    </HashRouter>
   </Provider>   
   ,
   document.getElementById('app')
 )