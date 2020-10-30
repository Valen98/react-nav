import React, { useContext } from 'react'
import { Route, useHistory } from 'react-router-dom'
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { UserContext } from '../../Shared/Global/Provider/UserProvider'

export const Navbar = () => {
    const [authenticatedUser, setAuthenitcatedUser] = useContext(UserContext)
    const history = useHistory()
    
    const handlePress = e => {
        history.push('/')
    }
    const handleLogout = e => {
        setAuthenitcatedUser(false)
        history.push('/')
        console.log(authenticatedUser)
    }

    function logout(user){
        if(user){
            return(
                
                <div className='Logout Button'>
                    <button
                    onClick={handleLogout}>
                        Logout
                    </button>
                </div>
                
            )
        }
    }   

    return(
        <div className="navbar">
            {authenticatedUser ? <p>Welcome {authenticatedUser}</p> : null}
                {logout(authenticatedUser)}
               
            <div className="hamburger">
                <h3><GiHamburgerMenu/></h3>
                <div className="DropDown">
                    <a onClick={handlePress}>Home</a>        
                    <a onClick={() => {history.push('/Profile')}}>Profile</a>
                </div>
            </div>
        </div>
    )
}