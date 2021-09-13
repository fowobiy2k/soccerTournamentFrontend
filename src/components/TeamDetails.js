import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import photo from '../img/Talented.jpeg'

const TeamDetails = ({ match: { params: { id } }, fetchTeam }) => {

    const [team, setTeam] = useState()

    useEffect(() => {
        const getTeam = async () => {
            let res = await fetchTeam(id);
            setTeam(res);


            console.log('current team')
            console.log(team)
            // setHomeLineUp(currentMatch.homeLineUp)
        }

        getTeam();
    }, [])

    return (
        <div>
            {team &&
                <div>
                    <section className='team-summary'>
                        
                        <div className='team-photo'><img src= {photo} alt='Photo'/></div>
                        <div>
                            <h2>{team.name}</h2>
                            <span>Coaches</span>
                            <div className='coaches'>
                                <p>{team.coaches[0]}</p>
                                <p>{team.coaches[1]}</p>
                            </div>
                            <span>Last Stage:</span>
                            <p>{team.lastStage}</p>
                        </div>
                    </section>

                    <section>
                        <h4>Players</h4>
                        <div>
                            {team && team.players.map( player => {
                                return  <div>
                                    <div>Player image</div>
                                    <div>
                                    <span>Name:</span>
                                    <div className=''><Link to={`/player/${player.id}`}><p>{player.firstName + ' ' + player.lastName }</p></Link></div>
                                        <span>Position</span>
                                        <span>{player.position}</span>
                                    </div>
                                </div>
                            })}
                        </div>
                    </section>
                </div>
            }
        </div>
    )
}

export default TeamDetails
