import React from 'react'
import { useHistory } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
    const history = useHistory()
    
    const handlePress = e => {
        history.push('/Profile')
    }
    return(
        <div className="navbar">
            <span  onClick={() => history.push("/Granted")}>Home</span>
        </div>
    )
}