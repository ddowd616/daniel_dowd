import { useState } from 'react'
import Greetings from "./components/Greeting.jsx";
import './App.css'
import UserCard from "./components/UserCard.jsx";
import CardContainer from "./components/CardContainer.jsx";

const App = () => {

    const users = [
        {userName: "Bob", age: 25},
        {userName: "Charlie", age: 35},
        {userName: "Alice", age: 30}
    ]

    const usersSortedByAge = users.sort((a,b)=>
    b.age - a.age);

    const displayUserCards = usersSortedByAge.map((users,i)=>(
        <UserCard {...users} key = {i}/>
    ))

    return (
        <>

            <Greetings name="Dan"/>
            <CardContainer>
                {displayUserCards}
            </CardContainer>


        </>
    )
}

export default App
