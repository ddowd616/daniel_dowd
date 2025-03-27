import {useState} from "react";

const App = () =>{
    const [days,setDays] = useState(365);
    const handleCountdownClick = () =>{
        setDays( days - 1)
    }
    return (
        <div className="App">
            <h1>Birthday Party Count Down App</h1>
            <div className="card">
                <button onClick={handleCountdownClick}>Click Me</button>
                <p>Days remaining {days}</p>
            </div>
        </div>

    )
}

export default App;