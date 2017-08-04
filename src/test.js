import React, { Component } from 'react';
import List from './list'

class Test extends Component{
    constructor(){
        super()
        this.state={
            enable:false,
            arr:['ahui','alice','jack','shanshan','zhou','qinghui']
        }
    }
    handleSearch(){
        var arr=[];
        var val=this.refs.ahui.value;
        this.state.arr.forEach(function(item,i){
            if(item.indexOf(val) != -1){
                arr.push(item)
            }
        })

        this.setState({
            arr:arr
        })
    }
    render(){
        return(
            <div>
                <input type="text" onKeyUp={this.handleSearch.bind(this)} ref='ahui'/>
                <List data={this.state.arr}/>
            </div>
        )
    }
}


export default Test