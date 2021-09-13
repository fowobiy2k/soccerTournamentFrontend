import React from 'react'

const Display = ({ obj }) => {
    return (
        <div className='fixture-display'>

            {obj && Object.keys(obj).map(function (game) {
                return <div className='single-fixture'>

                    <div className="title fixture-div">{obj[game].title}</div>
                    <div className="date fixture-div">{obj[game].date}</div>
                    {/* <div className="kickoff fixture-div"> {obj[game].time} </div> */}
                    <div className="time-elapsed fixture-div">-</div>
                    <div className="home-team fixture-div"  >{obj[game].homeTeam}</div>
                    <div className="home-score fixture-div">{obj[game].homeScore}</div>
                    <div className="versus fixture-div">{(!obj[game].live | obj[game].ended) ? obj[game].time : 'V'}</div>
                    <div className="away-score fixture-div">{obj[game].awayScore} </div>
                    <div className="away-team fixture-div" >{obj[game].awayTeam}</div>

                </div>
            })}

        </div>
    )
}

export default Display
