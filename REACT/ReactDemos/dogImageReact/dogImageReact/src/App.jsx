import {useEffect, useState} from 'react'
import axios from "axios";
import './App.css'

const App = () => {
    const [imagePath,setImagePath] = useState("")
    const baseURL = "https://dog.ceo/api"
    useEffect(()=>{
        let route = "breeds/image/random"
        let endpoint =`${baseURL}/${route}`
        axios.get(endpoint)
        .then(response  => {
            setImagePath(response.data.message)
            console.log("Response: ",response.data.message)
        })
        .catch(err => {
            console.error("Error:",err.message)
        })},[])

    const handleClick = () =>{
        console.log("Clicked")
        let route = "breeds/image/random"
        let endpoint =`${baseURL}/${route}`
        axios.get(endpoint)
            .then(response  => {
                setImagePath(response.data.message)
                console.log("Response: ",response.data.message)
            })
            .catch(err => {
                console.error("Error:",err.message)
            })
    }

  return (
    <>
        <h1>Dog Image Generator</h1>
        <button
        onClick={handleClick}>Click Me</button>
        <img src={imagePath} alt="dog"/>
    </>
  )
}

export default App
