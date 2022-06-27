import React, { Component } from "react";
import Child from "./Child";
class Parent extends Component{
    render(){
        return(
            <React.Fragment>
                <Child key1={"ReactJS"}
                       key2={100}>
                    Welcome
                </Child>
            </React.Fragment>
        )
    }
}
export default Parent;