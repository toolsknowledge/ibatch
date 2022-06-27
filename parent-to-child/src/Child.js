import React, { Component } from "react";

class Child extends Component{
    render(){
        return(
            <React.Fragment>
                <h2>{this.props.key1}</h2>
                <h2>{this.props.key2}</h2>
                <h2>{this.props.children}</h2>
            </React.Fragment>
        )
    }
}

export default Child;