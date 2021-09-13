import { Link } from 'react-router-dom'

const SelectMatch = ({scheduleObject}) => {
    return (
        <div>
            { scheduleObject && Object.keys(scheduleObject).map(function(game){
                return <div key={game.matchId}>
                    
                    <div>
                    <div className='fix-id fix-ctrl-main'>{scheduleObject[game].matchId}</div>
                        <div className='fix-title fix-ctrl-main'>{scheduleObject[game].title}</div>
                        <div className='fix-teams fix-ctrl-main'>{scheduleObject[game].homeTeam} vs {scheduleObject[game].awayTeam}</div>
                        <div className='fix-teams fix-ctrl-main'><Link to={`/match/${scheduleObject[game].matchId}`}>Manage</Link></div>
                    </div>
                    
                </div>
            })}


        </div>
    )
}

export default SelectMatch
