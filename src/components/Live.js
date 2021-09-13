
const Live = ({liveFixtures}) => {
    return (
        <div>
            <h3>Live</h3>
            {liveFixtures.map((fixture) => {
                return <div className="fix-grp" key={fixture.id}>
                    <div className="home-team fixture-div" id= {fixture.homeTeam.id} >{fixture.homeTeam.name}</div>{console.log(fixture.homeTeam.id)}
                    <div className="home-score fixture-div">-</div>
                    <div className="versus fixture-div">V</div>
                    <div className="away-score fixture-div">-</div>
                    <div className="away-team fixture-div" id= {fixture.awayTeam.id} >{fixture.awayTeam.name}</div>
                </div>
            })}
        </div>
    )
}

export default Live
