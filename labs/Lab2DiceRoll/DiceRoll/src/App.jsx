import {useEffect, useState} from 'react'
import './App.css'
import {getRandomNumber} from "./util/helper.js";
import Dice from "./components/Dice.jsx";

const App = () => {
    const [diceIndex,setDiceIndex] = useState(getRandomNumber());
    const [diceIndex2,setDiceIndex2] = useState(getRandomNumber());
    const [total,setTotal] = useState(null);

    useEffect(() => {
        setDiceIndex(getRandomNumber())
    }, []);

    useEffect(() => {
        setDiceIndex2(getRandomNumber())
    }, []);

    const rollDice = () => {
        const newDiceIndex =(getRandomNumber())
        const newDiceIndex2 =(getRandomNumber())
        setDiceIndex(newDiceIndex)
        setDiceIndex2(newDiceIndex2)
        setTotal(newDiceIndex + newDiceIndex2 + 2)
    }


  return (
      <>
          <h1>Dice Roller</h1>
          <Dice numberIndex={diceIndex}/>
          <Dice numberIndex={diceIndex2}/>
          <h2>The total roll is {total}</h2>
          <button  style={
              {fontSize: "20px",
                  marginTop: "20px"
              }} onClick={rollDice}>Roll Dice</button>
      </>
  )
}

export default App
