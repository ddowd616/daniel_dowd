import React, {useState} from 'react';

const Button = () => {
    const [status,setStatus] = useState("OFF")

    const toggleStatus = () => {
        setStatus((prevState)=>(prevState === "OFF" ? "ON" : "OFF"))

        }


    return (
        <div>
            <button onClick={toggleStatus}>{status}</button>
        </div>
    );
};

export default Button;