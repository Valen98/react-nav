import React, {useContext, useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../Shared/Global/Provider/UserProvider'

export default function ProfileView() {
    const [count, setCount] = useState(0)
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const history = useHistory()
    useEffect(() => {
        if(localStorage.getItem("username") == ''){
            alert('You must login')
            history.push('/')
        }
        else{
            alert(`Welcome ${localStorage.getItem("username")}`)
        }
    })
    return(
        <div>
            <h1>This is your Profile {localStorage.getItem('username')}</h1>
        </div>
    )
}