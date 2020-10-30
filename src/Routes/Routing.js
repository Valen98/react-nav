import React, {useEffect, useContext } from 'react'
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import login from "../View/loginView"
import Granted from '../View/GrantedView'
import Profile from '../View/ProfileView'
import { UserContext, ApiContext } from '../Shared/Global/Provider/UserProvider'

function Routing(props) {
    const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)


    const CheckIfUserIsAuthenticatedInBrowser = () => {
        setAuthenticatedUser(localStorage.getItem("username"))
    }

    useEffect(() => {
        CheckIfUserIsAuthenticatedInBrowser()
    }, [])
    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path="/Profile" component={Profile} />
                <Route exact path="/Granted" component={Granted}/>
                <Route component={login} />
            </Switch>
        </Router>
    )
}

export default Routing
