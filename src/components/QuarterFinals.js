

const QuarterFinals = ({scheduleObject}) => {
    return (
        <div>
            <h4>Quarter Finals</h4>
            
            {
                scheduleObject && Object.keys(scheduleObject).map( function(game){
                    return <div>
                        <div className="title fixture-div">{scheduleObject[game].title}</div>
                        <div className="time-elapsed fixture-div">-</div>
                        <div className="home-team fixture-div"  >{scheduleObject[game].homeTeam}</div>
                        <div className="home-score fixture-div">{scheduleObject[game].homeScore}</div>
                        <div className="versus fixture-div">V</div>
                        <div className="away-score fixture-div">{scheduleObject[game].awayScore} </div>
                        <div className="away-team fixture-div" >{scheduleObject[game].awayTeam}</div>
                        <div className="kickoff fixture-div"> {scheduleObject[game].time} </div>
                        <div className="date fixture-div">{ scheduleObject[game].date }</div>
                    </div>
                })
            }


            
        </div>
    )
}

export default QuarterFinals
