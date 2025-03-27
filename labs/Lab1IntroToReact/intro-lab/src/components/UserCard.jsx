import React from "react";

const UserCard = ({userName,age}) => {
    return(
        <div style={{border: "3px solid", padding: "10px", marginBottom: "10px"}}>
            <h2>{userName}</h2>
            <p>{age}</p>
        </div>
    )
}

export default UserCard