import { Link } from 'react-router-dom'
import SelectMatch from './SelectMatch'

const ManageMatches = ({ scheduleObject }) => {

    return (
        <div>
            <h3 id='heading'>Match Control Panel</h3>
            <SelectMatch scheduleObject={scheduleObject.firstRound} /> 
            <SelectMatch scheduleObject={scheduleObject.quarterFinals} />
            <SelectMatch scheduleObject={scheduleObject.semiFinals} />
            <SelectMatch scheduleObject={scheduleObject.finals} />
            {/* <h2>Match Manager</h2>
            <div>{id}</div> */}


        </div>
    )
}

export default ManageMatches
// export default ({ match : { params : {id}}}) => <h1>{id}</h1>
