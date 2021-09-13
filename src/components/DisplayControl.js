
const DisplayControl = ({scheduleObject,  updateLineup, displayList }) => {
    return (
        <div>
            { scheduleObject && Object.keys(scheduleObject).map(function(game){
                return <div key={game.matchId}>
                    
                    <div>
                    <div className='fix-id fix-ctrl-main'>{scheduleObject[game].matchId}</div>
                        <div className='fix-title fix-ctrl-main'>{scheduleObject[game].title}</div>
                        <div className='fix-teams fix-ctrl-main'>{scheduleObject[game].homeTeam} vs {scheduleObject[game].awayTeam}</div>
                    </div>

                    {/* <div className='start-linuep'>
                            <div className='home-lineup' id={scheduleObject[game].matchId + 'home'}>{homeLineup && homeLineup.map(player => { return <p>{player.firstName}</p> })}</div>
                            <div className='away-lineup' id={scheduleObject[game].matchId + 'away'}>{awayLineup && awayLineup.map(playerName => { return <p>{playerName}</p> })}</div>
                    </div> */}

                    <div>
                            <div className='btn-lineup fix-ctrl-main' ><input type='button' value='Lineup' onClick={() => { displayList(scheduleObject[game].matchId) }} /></div>
                            <div className='btn-start-match fix-ctrl-main' ><input type='button' value='Start' /></div>
                            <div className='btn-reg-event fix-ctrl-main' ><input type='button' value='Goal' /></div>
                            <div className='btn-reg-event fix-ctrl-main' ><input type='button' value='Foul' /></div>
                            <div className='btn-end-match fix-ctrl-main' ><input type='button' value='End' /></div>
                    </div>

                    {console.log("Fixture object")}
                    {console.log(scheduleObject[game])}

                    <div>
                        <h5>Team List</h5>
                    <div id={scheduleObject[game].matchId + 'home'}>{scheduleObject[game].homeLineUp && scheduleObject[game].homeLineUp.map( player => {
                        return <p>{player.firstName}</p>
                    } )}</div>

                    {console.log("Away squad:")}
                    {console.log(scheduleObject[game].awayLineUp)}

                    <div id={scheduleObject[game].matchId + 'away'}>{scheduleObject[game].awayLineUp && scheduleObject[game].awayLineUp.map( player => {
                        return <p>{player.firstName}</p>
                    } )}</div>
                    </div>
                    
                    <div className='full-team-list' id={scheduleObject[game].matchId} >
                        <div className='home-full-list full-list'>

                        <b>{scheduleObject[game].homeSquad && scheduleObject[game].homeTeam}</b>
                            
                            { scheduleObject[game].homeSquad && scheduleObject[game].homeSquad.map( player => {
                                return <div>
                                    <p id={player.id} matchid={scheduleObject[game].matchId} added='false' diplayarea={scheduleObject[game].matchId + 'home'} key={player.id} ishome='true' onClick={updateLineup}>{player.firstName}</p>
                                </div>
                            })}
                        </div>

                        <div className='away-full-list full-list'>
                            
                        <b>{scheduleObject[game].awaySquad && scheduleObject[game].awayTeam}</b>

                            { scheduleObject[game].awaySquad && scheduleObject[game].awaySquad.map( player => {
                                return <div>
                                    <p id={player.id} matchid={scheduleObject[game].matchId} added='false' key={scheduleObject[game].matchId} ishome='false' diplayarea={scheduleObject[game].matchId + 'away'} onClick={updateLineup}>{player.firstName}</p>
                                </div>
                            })}
                        </div>
                    </div>
                    
                </div>
            })}

            

        </div>
    )
}

export default DisplayControl
