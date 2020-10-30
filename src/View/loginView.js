import React, {useState, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import userProvider, { UserContext } from '../Shared/Global/Provider/UserProvider'

function Login() {
    const [input, setInput] = useState('')
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const history = useHistory()

    function validateForm(){
        return input.length > 0
    }

    const handleChange = e =>{
        setInput(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault()
        setAuthenticatedUser(input)
        localStorage.setItem("username", input)
        history.push('/Granted')
    }

    return (
        <div className="wrapper">

        <div className="login-div">
            <form onSubmit={handleSubmit} className="login-form">
                <input placeholder="Username" type="username" className="Username" onChange={handleChange} value={input}></input>
                <input placeholder="Password" type="password" className="Password"></input>
                <button disabled={!validateForm()}onClick={handleSubmit}>Login</button>
            </form>
        </div>
        </div>
    )
}

export default Login
