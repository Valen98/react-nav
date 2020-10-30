import React, {useState, useContext, createContext} from 'react'

export const ApiContext = createContext()

function ApiProvider(props) {
    const [apiStorage, setApiStorage] = useState()
    return(
        <ApiContext.Provider value={[apiStorage, setApiStorage]}>
            {props.chilrden}
        </ApiContext.Provider>
    )
}

export default ApiProvider