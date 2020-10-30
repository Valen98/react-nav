import React, {useEffect, useState} from 'react'

export default function ProfileView() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        alert("Component is rendering")
    }, count)

    return(
        <div>
            <h1>Profile View</h1>
            <button onClick={() => setCount(count +1)}> Add</button>
            <h3>{count}</h3>
            <button onClick={() => setCount(count -1)}>Minus</button>
        </div>
    )
}