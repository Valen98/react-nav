import React, {useState, useContext, useEffect} from 'react'
import userProvider, { UserContext } from '../Shared/Global/Provider/UserProvider'
import Trump from '../Shared/api/Service/TronaldDumpService'
import { useHistory } from 'react-router-dom'

function Granted() {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
    const [apiStorage, setApiStorage] = useState()
    const history = useHistory()
    useEffect(() => {
        if(localStorage.getItem('username') != ''){
            if(apiStorage){
                alert(apiStorage.data.value)
            }else{  
                document.title = 'press the quote button'
            }
        }else{
            alert('You must Login')
            history.push('/')
        }
    })

    const handlePress = e => {
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
            <button onClick={handlePress}>Get a Random Trump Quote</button>
            {displayData()}
            
        </div>
    )
}
export default Granted
