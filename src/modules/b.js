import React, { Component } from 'react';
import {connect} from 'react-redux'
import Todo from './todo'

class B extends Component{
    render(){
        const {dispatch,complete}=this.props
        console.log('旧状态'+complete)
        return(
            <Todo handleClick={()=>dispatch({type:'ok'})} complete={complete}></Todo>
        )
    }
}

function mapStateToProps(state){
    return {complete:state.complete}
}

export default connect(mapStateToProps)(B)