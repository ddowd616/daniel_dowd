//hooks -functions that hook into react and allow functionality
import { useState, useEffect } from 'react'
import './App.css'

function App() {

    const [count,setCount] = useState(0);
    const [isSeven,setIsSeven] = useState(false);

    //empty braces on deps means just run one time
    //if you have stuff in the deps it will pay attention to when those things change
    useEffect(() => {
        setIsSeven(count === 7)
    },[])

    //useEffect is a hook aka function
    //takes two arguments: cb() and list of dependencies
    //useEffect

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
