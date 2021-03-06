import React, { useContext, createContext, useState} from 'react'
import ApiProvider from './ApiProvider'

export const UserContext = createContext()
export const ApiContext = createContext()

function UserProvider(props) {
    const [authenticatedUser, setAuthenticatedUser] = useState()
    return (
        <UserContext.Provider value={[authenticatedUser, setAuthenticatedUser]}>
            {props.children}
        </UserContext.Provider>
        
    )
}

export default UserProvider
