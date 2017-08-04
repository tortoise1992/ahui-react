import React, { Component } from 'react';
class List extends Component{
    constructor(){
        super()
    }
    render(){
        var arr=[];
        this.props.data.forEach(function(element,i) {
            arr.push(<p key={i}>{element}</p>)
        }, this);
        return(
            <div>
                {arr}
            </div>
        )
    }
}

export default List