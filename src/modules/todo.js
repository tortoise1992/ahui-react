import React, { Component } from 'react';

export default class Todo extends Component{
    render(){
        return(
            <div onClick={this.props.handleClick} style={{color:this.props.complete?'red':'black'}}>
                测试数据
            </div>
        )
    }
}