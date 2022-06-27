import React,{Component} from "react";
class State extends Component{
    constructor(){
        super();
        this.state = {
            key1 : "Hello_1",
            key2 : 100,
            key3 : true
        }
    }
    render(){
        return(
            <React.Fragment>
                {this.state.key3} ? ({this.state.key1} <br></br> {this.state.key2}) : (<div></div>)
            </React.Fragment>
        )
    }
};
export default State;