import React,{useContext} from "react";
import {globalSpace1} from "../context/globalSpace";
function Comp4(){
    const name = useContext(globalSpace1);
    return(
        <React.Fragment>
            <h1>{name}</h1>
        </React.Fragment>
    )
}
export default Comp4;