import {useState} from "react";
import "../src/App.css";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <form action="/sendData">
            <input type="email" name="email" id="email" placeholder={"Enter email"}/>
            <input type={showPassword ? "text" : "password"} name="password" id="password"
                   placeholder={"Enter password"}/>
            <i className={showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}  onClick={handleShowPassword}></i>
            <button type="submit">Submit</button>
        </form>
    )
}


export default LoginForm