import React, {useContext, useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../Shared/Global/Provider/UserProvider'

export default function ProfileView() {
    const [count, setCount] = useState(0)
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const history = useHistory()
    useEffect(() => {
        if(authenticatedUser){
            alert(`Welcome ${authenticatedUser}`)
        }
        else{
            alert('You must sign in')
            history.push('/')
        }
    }, [])
    return(
        <div>
            <h1></h1>
        </div>
    )
}