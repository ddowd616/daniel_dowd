import React, {useState} from 'react';

const Colors = () => {
    const [color,setColor] = useState("")

    function changColor(color) {
        setColor(color)
        document.body.style.backgroundColor = color;
    }

    return (
        <div>
            <p onClick={() => {changColor('red')}}>Red</p>
            <p onClick={() => {changColor('yellow')}}>Yellow</p>
            <p onClick={() => {changColor('green')}}>Green</p>


        </div>
    );
};

export default Colors;