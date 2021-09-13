import React from 'react'
import { useSelector } from 'react-redux'

const StoreAccessTest = () => {
    const evt = useSelector((state) => state );
    
    console.log("Event log: ")
    console.log(evt)
    return (
        <div>
            <h4>Events</h4>
            { evt && evt.map(e => {
                return <p>{e.message}</p>
            })}

            <input type="submit" value="Score a goal" />
            <input type="submit" value="Commit a foul" />
        </div>
    )
}

export default StoreAccessTest
