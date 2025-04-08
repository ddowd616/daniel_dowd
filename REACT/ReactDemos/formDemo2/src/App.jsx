import {useState} from "react";

const App = () => {
    const initialState = {
        fname: "",
        age: 0
    }
    // const [firstName, setFirstName] = useState("");
    // const [age, setAge] = useState(0);
    const [formData, setFormData] = useState(initialState)
    const {fname,age} = formData;

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
    }

    const handleChange = () => {

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="" className="fname" >First Name</label>
                <input onChange={handleChange} type="text" name="fname" id="" value={fname}/>
                <br/>
                <label htmlFor="" className="age">Age</label>
                <input onChange={handleChange} type="text" name="age" id="" value={age}/>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </>
            
        
    );
};

export default App;
