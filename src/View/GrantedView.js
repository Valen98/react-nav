import React, {useState, useContext} from 'react'
import userProvider, { UserContext } from '../Shared/Global/Provider/UserProvider'
import Trump from '../Shared/api/Service/TronaldDumpService'

function Granted() {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const [apiStorage, setApiStorage] = useState()

    const handleSubmit = e => {
        e.preventDefault()
        Trump.SearchTrumpQuote()
        .then((response) => setApiStorage(response))
        .catch((error) => console.log(error))
    }

    const displayData = () => {
        if(apiStorage) {
            return (
                <div>
                    <h3>{apiStorage.data.value}</h3>
                </div>
            )
        }
    }
    return (
        <div>
            <p>Signed in as: <b> {authenticatedUser} </b></p>
            <button onClick={handleSubmit}>Get a Random Trump Quote</button>
            {displayData()}
            
        </div>
    )
}
export default Granted
