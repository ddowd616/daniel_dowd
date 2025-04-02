import React from "react";
import {numberWords} from "../util/helper.js";

const Dice = ({numberIndex}) => {

    return(
        <>
            <i style={
                {fontSize: "100px",
                margin: "20px"
            }} className={`fas fa-dice-${numberWords[numberIndex]}`}></i>
        </>
    )
}

export default Dice