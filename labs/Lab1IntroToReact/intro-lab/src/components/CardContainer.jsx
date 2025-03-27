import React from "react";

const CardContainer = ({children}) => {
    return (

        <div style={{border: "solid 2px", padding: "20px"}}>
            {children}
        </div>

    )
}

export default CardContainer