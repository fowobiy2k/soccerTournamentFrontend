import React from 'react'

const FixtureTest = ({ list }) => {


    return (
        <div className='main-fixt-div'>
            <h3>Fixtures</h3>

            <h5>First Round</h5>

            { console.log({list})}


            <div className='fixt-div'>
                {list.map((fixture) => {  
                    return <div className="single-fixt" key={fixture.id}>
                    
                    <div className="team-home" id={fixture.homeTeam.id} >{fixture.homeTeam.name}</div>
                    <div className="score-home">-</div>
                    <div className="vs">V</div>
                    <div className="score-away">-</div>
                    <div className="team-away" id={fixture.awayTeam.id} >{fixture.awayTeam.name}</div>
                    <div className="kickoff-time">{fixture.kickOff ? fixture.kickOff : <span>16:00</span>}</div>
                    <div className="fdate">{fixture.date ? fixture.date : <span></span>}</div>
                </div>
            })}
            </div>
        </div>
    )

    
}

export default FixtureTest
