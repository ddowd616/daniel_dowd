import { useState } from 'react'
import './App.css'

function App() {

    const [count,setCount] = useState(7);
    const [isSeven,setIsSeven] = useState(false)

    const handleClick = () => {
        //create random number
        let newCount = Math.floor(Math.random()*10+1)
        setCount(newCount)
        setIsSeven(newCount === 7)
        console.log("Clicked")
    }

  return (
    <>
        <h1>Welcome to Valhalla!!</h1>
        {/*{user clicks the button generate a random number}*/}
        <button
        onClick={handleClick}
        style={
            {visibility: isSeven ? "hidden" : "visible"}
        }
        >Click me</button>
        <h2>{count}</h2>
        {isSeven && <h1>You win!!</h1>}
    </>
  )
}

export default App
