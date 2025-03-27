// foundation
import React from "react";

//build component

const MonsterCard = ({firstName,lastName,age,type,moreInfo}) => {
    // const {firstName,lastName} = props
    return(
        <div className= "monster-card">
            <h1>{firstName}{lastName}</h1>
            <p>Age : {age} </p>
            <p>Type : {type} </p>
            <p>More : {moreInfo} </p>
        </div>
    )
}

//export so it can be used with other files
export default MonsterCard