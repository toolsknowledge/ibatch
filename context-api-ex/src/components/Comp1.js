import React from "react";
import {globalSpace1} from "../context/globalSpace";
import Comp2 from "./Comp2";
function Comp1(){
    return(
        <React.Fragment>
            <globalSpace1.Provider value="Sathya Technologies">
                <Comp2></Comp2>
            </globalSpace1.Provider>
        </React.Fragment>
    )
}
export default Comp1;