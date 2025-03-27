import { useState } from 'react'
import './App.css'

const App = () => {
    const [todos,setTodos] = useState([])
    const [newTodo,setNewTodo] = useState("")

    // const person :{address1:string,address2:string,firstName:string,lastName:string} = {
    //     firstName:"",
    //     lastName:"",
    //     address1:"",
    //     address2:""
    // }
    // const [people:{address1:string,address2:string,firstName:string,lastName:string},setPeople] = useState(person)
    // const [firstName,setFirstName] = useState("")
    // const [lastName,setlastName] = useState("")
    // const [address1,setAddress1] = useState("")
    // const [address2,setAddress2] = useState("")

    const handleChange = (event) => {
        setNewTodo(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newTodos = [...todos, newTodo]
        setTodos(newTodos)
        setNewTodo("")
        return true
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="newTodo"
                    autoComplete="off"
                    placeholder="what needs to be done?"
                    onChange={handleChange}
                />
                <input
                    type="submit"
                    className="save-button"
                />
            </form>
            <div className="todo-content">
                <ol>
                    {todos.map((el,i)=>{
                    return (
                        <li key={i}>{el}</li>
                    )
                })}
                </ol>
            </div>
        </div>
    )
}

export default App
