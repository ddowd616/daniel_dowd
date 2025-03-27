import React from "react";
import MonsterCard from "./components/MonsterCard.jsx"
import {monsters} from "./util/database.js";


const App = () => {

    const displayMonsterCards = monsters.map((monster,i) => (
        <MonsterCard {...monster} key={i} />
    ))

    return (
        <>
            <h1>Monster Database</h1>

            {
                displayMonsterCards
            }


        </>

    )
}

export default App;