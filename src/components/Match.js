import { useEffect, useState, useRef } from 'react'
import Modal from 'react-modal';

const Match = ({ match: { params: { id } }, fetchMatch, fetchHome, fetchAway, updateLineup, putHomeSoloGoal, putHomeGoal, registerFoul, fetchTeamSquad }) => {

    const [currentMatch, setCurrentMatch] = useState();
    const [openAwayLineUp, setOpenAwayLineUp] = useState(false);
    const [openHomeLineUp, setOpenHomeLineUp] = useState(false);
    
    const [openHomeSoloGoal, setOpenHomeSoloGoal] = useState(false);
    const [openAwaySoloGoal, setOpenAwaySoloGoal] = useState(false);
    const [openHomeGoalWithAssist, setOpenHomeGoalWithAssist] = useState(false);
    const [openAwayGoalWithAssist, setOpenAwayGoalWithAssist] = useState(false);
    const [openHomeGoalType, setOpenHomeGoalType] = useState(false);
    const [openAwayGoalType, setOpenAwayGoalType] = useState(false);
    
    const [awayLineUp, setAwayLineUp] = useState([]);
    const [homeLineUp, setHomeLineUp] = useState([]);

    const [openHomeFoul, setOpenHomeFoul] = useState(false)
    const [openAwayFoul, setOpenAwayFoul] = useState(false)

    const [ fullHomeSquad, setFullHomeSquad ] = useState()
    const [ fullAwaySquad, setFullAwaySquad ] = useState()

    useEffect(() => {
        const getMatch = async () => {
            let res = await fetchMatch(id);
            setCurrentMatch(res);
            let homeStart = await fetchHome(id);
            // homeStart.map( (player) => ( setHomeLineUp( [...homeLineUp, player] ) ))
            setHomeLineUp(homeStart)

            let homeSquad = await fetchTeamSquad(res.homeTeam)
            setFullHomeSquad(homeSquad)

            let awaySquad = await fetchTeamSquad(res.awayTeam)
            setFullAwaySquad(awaySquad)

            let awayStart = await fetchAway(id);
            setAwayLineUp(awayStart)

            console.log('current match')
            console.log(currentMatch)
            // setHomeLineUp(currentMatch.homeLineUp)
        }

        getMatch();
    }, [])

    const searchAwayFullList = (matchId, playerId) => {
        fullAwaySquad.map((p) => {
            if (p.id == playerId) {
                setAwayLineUp([...awayLineUp, p])
                console.log("Inside search block")
                // console.log(e)
                updateLineup(matchId, playerId)
            }
        })
    }

    const searchHomeFullList = (matchId, playerId) => {
        fullHomeSquad.map((p) => {
            if (p.id == playerId) {
                setHomeLineUp([...homeLineUp, p])
                updateLineup(matchId, playerId)
            }
        })
    }

    const updateAway = (e) => {
        // let nextPlayer = document.getElementById('selectHomeLineup').value
        // setHomeLineUp( [ ...homeLineUp, {nextPlayer}])

        console.log('update away')
        let v = document.getElementById('selectAwayLineup').value
        let s = document.getElementById('selectAwayLineup')
        let indexValue = s.options[s.selectedIndex].value
        let matchId = s.attributes.matchid.value
        let playerId = indexValue
        console.log(v)
        console.log(e)
        console.log(indexValue)
        console.log(s.attributes.matchid.value)
        // console.log(e.target.attributes.matchid)
        // console.log(e.target.options.selectedIndex)
        searchAwayFullList(matchId, playerId)
    }


    const updateHome = (e) => {
        // let nextPlayer = document.getElementById('selectHomeLineup').value
        // setHomeLineUp( [ ...homeLineUp, {nextPlayer}])

        console.log('update home')
        let v = document.getElementById('selectHomeLineup').value
        let s = document.getElementById('selectHomeLineup')
        let indexValue = s.options[s.selectedIndex].value
        let matchId = s.attributes.matchid.value
        let playerId = indexValue
        console.log(v)
        console.log(e)
        console.log(indexValue)
        console.log(s.attributes.matchid.value)
        console.log(v)
        searchHomeFullList(matchId, playerId)
    }

    const updateHomeSoloGoal = (e) => {

        let s = document.getElementById("selectHomeSoloScorer")
        let indexValue = s.options[s.selectedIndex].value
        let matchId = s.attributes.matchid.value
        let playerId = indexValue
        
        setOpenHomeSoloGoal(false)
        
        putHomeSoloGoal(matchId, playerId)
    }

    const updateAwaySoloGoal = (e) => {

        let s = document.getElementById("selectAwaySoloScorer")
        let indexValue = s.options[s.selectedIndex].value
        let matchId = s.attributes.matchid.value
        let playerId = indexValue
        
        setOpenAwaySoloGoal(false)
        
        putHomeSoloGoal(matchId, playerId)
    }

    const updateHomeGoal = (e) => {

        let s = document.getElementById("selectHomeScorer")
        let ss = document.getElementById("selectHomeAssist")
        let scorerId = s.options[s.selectedIndex].value
        let assistId = ss.options[ss.selectedIndex].value
        let matchId = s.attributes.matchid.value
        
        setOpenHomeGoalWithAssist(false)
        
        putHomeGoal(matchId, scorerId, assistId)
    }

    const updateAwayGoal = (e) => {

        let s = document.getElementById("selectAwayScorer")
        let ss = document.getElementById("selectAwayAssist")
        let scorerId = s.options[s.selectedIndex].value
        let assistId = ss.options[ss.selectedIndex].value
        let matchId = s.attributes.matchid.value
        
        setOpenAwayGoalWithAssist(false)
        
        putHomeGoal(matchId, scorerId, assistId)
    }

    const submitFoul = (e) => {

        let s = document.getElementById("selectFoulSubject")
        let subject = document.getElementById("selectFoulSubject").value
        let offender = document.getElementById("selectOffender").value
        let card = document.getElementById("selectCard").value
        let setPiece = document.getElementById("selectSetPiece").value
        // let scorerId = s.options[s.selectedIndex].value
        // let assistId = ss.options[ss.selectedIndex].value
        let matchId = s.attributes.matchid.value

        setOpenHomeFoul(false)
        
        registerFoul(matchId, subject, offender, card, setPiece)
    }

    const submitAwayFoul = (e) => {

        let s = document.getElementById("selectAwayFoulSubject")
        let subject = s.value
        let offender = document.getElementById("selectAwayOffender").value
        let card = document.getElementById("selectAwayCard").value
        let setPiece = document.getElementById("selectAwaySetPiece").value
        // let scorerId = s.options[s.selectedIndex].value
        // let assistId = ss.options[ss.selectedIndex].value
        let matchId = s.attributes.matchid.value

        setOpenAwayFoul(false)
        
        registerFoul(matchId, subject, offender, card, setPiece)
    }

    return (
        <div>
            {currentMatch &&
                <div>

                    <div className="home">
                        <div>{currentMatch.homeTeam}</div>
                        <div className='home-event-div'>Event Div</div>
                        <div className="home-ctrl">
                            <input type="button" value={currentMatch.homeTeam + ' Lineup'} onClick={() => { setOpenHomeLineUp(true) }} />
                            <input type="button" value={currentMatch.homeTeam + ' Goal'} onClick={() => { setOpenHomeGoalType(true) }} />
                            <input type="button" value={currentMatch.homeTeam + ' Foul'} onClick={() => { setOpenHomeFoul(true) }} />
                        </div>
                        <div>{currentMatch.homeLineUp.map((player) => { return <p>{player.firstName}</p> })}</div>
                        <div>

                            <Modal isOpen={openHomeLineUp}>
                                <h3>{currentMatch && currentMatch.homeTeam}</h3>
                                {homeLineUp && homeLineUp.map((player) => {
                                    return <p>{player.firstName + ' ' + player.lastName}</p>
                                })}
                                {/* {currentMatch.homeLineUp.map( (player) => {return <p>{player.firstName}</p>})} */}
                                <button onClick={() => { setOpenHomeLineUp(false) }}>Close</button>

                                <br /> <br />

                                <label htmlFor="selectHomeLineup">Add to lineup:</label>
                                <select name="selectHomeLineup" id="selectHomeLineup" matchid={currentMatch.id} onChange={(e) => updateHome()}>
                                    <option value=''>None</option>
                                    {fullHomeSquad && fullHomeSquad.map(player => {
                                        return <option key={player.id} value={player.id}>{player.firstName + ' ' + player.lastName}</option>
                                    })}
                                </select> <br />

                            </Modal>
                        </div>

                        <div>
                            <Modal isOpen={openHomeGoalType}>
                                <h3>{currentMatch && currentMatch.homeTeam} <b>Goal!!!</b></h3>
                                    <div><input type="button" value="Solo Goal" onClick={() => { setOpenHomeSoloGoal(true) }} /></div>
                                    <div><input type="button" value="Goal and Assist" onClick={() => { setOpenHomeGoalWithAssist(true) }} /></div>
                                    <Modal isOpen={openHomeSoloGoal}>
                                    <label htmlFor="selectHomeSoloScorer">Select scorer:</label>
                                    <select name="selectHomeSoloScorer" id="selectHomeSoloScorer" matchid={currentMatch.id} onChange={(e) => updateHomeSoloGoal()}>
                                        <option value=''>None</option>
                                        {fullHomeSquad && fullHomeSquad.map(player => {
                                            return <option key={player.id} value={player.id}>{player.firstName + ' ' + player.lastName}</option>
                                        })}
                                    </select> <br />

                                    {/* <div><input type="button" value="Add Goal" onClick={() => { setOpenHomeSoloGoal(false) }}/></div> */}

                                    <div><input type="button" value="Close" onClick={() => { setOpenHomeSoloGoal(false) }}/></div>
                                
                                    </Modal>

                                    <Modal isOpen={openHomeGoalWithAssist}>
                                    <label htmlFor="selectHomeScorer">Select scorer:</label>
                                    <select name="selectHomeScorer" id="selectHomeScorer" matchid={currentMatch.id} >
                                        <option value=''>None</option>
                                        {fullHomeSquad && fullHomeSquad.map(player => {
                                            return <option key={player.id} value={player.id}>{player.firstName + ' ' + player.lastName}</option>
                                        })}
                                    </select> <br />

                                    <label htmlFor="selectHomeAssist">Assist By::</label>
                                    <select name="selectHomeAssist" id="selectHomeAssist" matchid={currentMatch.id} >
                                        <option value=''>None</option>
                                        {fullHomeSquad && fullHomeSquad.map(player => {
                                            return <option key={player.id} value={player.id}>{player.firstName + ' ' + player.lastName}</option>
                                        })}
                                    </select> <br />

                                    <div><input type="button" value="Add Goal" onClick={(e) => { updateHomeGoal(e) }}/></div>
                                    <div><input type="button" value="Close" onClick={() => { setOpenHomeGoalWithAssist(false) }}/></div>

                                    </Modal>

                                    <div><input type="button" value="Close" onClick={() => { setOpenHomeGoalType(false) }}/></div>
                                    
                            </Modal>
                        </div>

                        <div>
                            <Modal isOpen={openHomeFoul}>
                                <div>
                                <label htmlFor="selectFoulSubject">Who was fouled:</label>
                                    <select name="selectFoulSubject" id="selectFoulSubject" matchid={currentMatch.id} >
                                        <option value=''>Select</option>
                                        {fullHomeSquad && fullHomeSquad.map(player => {
                                            return <option key={player.id} value={player.id}>{player.firstName + ' ' + player.lastName}</option>
                                        })}
                                    </select> <br />
                                </div>

                                <div>
                                <label htmlFor="selectOffender">Who committed the foul:</label>
                                    <select name="selectOffender" id="selectOffender" matchid={currentMatch.id} >
                                        <option value=''>Select</option>
                                        {fullAwaySquad && fullAwaySquad.map(player => {
                                            return <option key={player.id} value={player.id}>{player.firstName + ' ' + player.lastName}</option>
                                        })}
                                    </select> <br />
                                </div>

                                <div>
                                <label htmlFor="selectCard">Card shown by referee:</label>
                                    <select name="selectCard" id="selectCard" matchid={currentMatch.id} required >
                                        <option value=''>Select</option>
                                        <option value='None'>None</option>
                                        <option value='yellow'>Yellow Card</option>
                                        <option value='red'>Red Card</option>
                                        
                                    </select> <br />
                                </div>

                                <div>
                                <label htmlFor="selectSetPiece">Set piece awarded:</label>
                                    <select name="selectSetPiece" id="selectSetPiece" matchid={currentMatch.id} required >
                                        <option value=''>Select</option>
                                        <option value='free kick'>Free Kick</option>
                                        <option value='penalty'>Penalty</option>
                                        
                                    </select> <br />
                                </div>

                                <div><input type="button" value="Register Foul" onClick={ (e) => {submitFoul(e)}} /></div>
                                <div><input type="button" value="Close" /></div>
                            
                            </Modal>
                        </div>
                    </div>

                    <div className="away">
                        <div>{currentMatch.awayTeam}</div>
                        <div className="away-event-div"></div>
                        <div className="away-ctrl">
                            <input type="button" value='Away Lineup' onClick={() => { setOpenAwayLineUp(true) }} />
                            <input type="button" value='Away Goal' onClick={() => { setOpenAwayGoalType(true) }} />
                            <input type="button" value='Away Foul' onClick={() => { setOpenAwayFoul(true) }} />
                        </div>
                        <div>

                            <Modal isOpen={openAwayLineUp}>
                                <h3>{currentMatch && currentMatch.awayTeam}</h3>
                                {awayLineUp && awayLineUp.map((player) => {
                                    return <p>{player.firstName + ' ' + player.lastName}</p>
                                })}
                                {/* {currentMatch.homeLineUp.map( (player) => {return <p>{player.firstName}</p>})} */}
                                <button onClick={() => { setOpenAwayLineUp(false) }}>Close</button>

                                <br /> <br />

                                <label for="selectAwayLineup">Add to away lineup:</label>
                                <select name="selectAwayLineup" id="selectAwayLineup" matchid={currentMatch.id} onChange={(e) => updateAway({ e })}>
                                    {fullAwaySquad && fullAwaySquad.map(player => {
                                        return <option key={player.id} value={player.id}>{player.firstName + ' ' + player.lastName}</option>
                                    })}
                                </select> <br />

                            </Modal>
                        </div>

                        
                        <div>
                            <Modal isOpen={openAwayGoalType}>
                                <h3>{currentMatch && currentMatch.awayTeam} <b>Goal!!!</b></h3>
                                    <div><input type="button" value="Solo Goal" onClick={() => { setOpenAwaySoloGoal(true) }} /></div>
                                    <div><input type="button" value="Goal and Assist" onClick={() => { setOpenAwayGoalWithAssist(true) }} /></div>
                                    <Modal isOpen={openAwaySoloGoal}>
                                    <label htmlFor="selectAwaySoloScorer">Select scorer:</label>
                                    <select name="selectAwaySoloScorer" id="selectAwaySoloScorer" matchid={currentMatch.id} onChange={(e) => updateAwaySoloGoal()} >
                                        <option value=''>None</option>
                                        {fullAwaySquad && fullAwaySquad.map(player => {
                                            return <option key={player.id} value={player.id}>{player.firstName + ' ' + player.lastName}</option>
                                        })}
                                    </select> <br />

                                    {/* <div><input type="button" value="Add Goal" onClick={() => { setOpenHomeSoloGoal(false) }}/></div> */}

                                    <div><input type="button" value="Close" onClick={() => { setOpenAwaySoloGoal(false) }}/></div>
                                
                                    </Modal>

                                    <Modal isOpen={openAwayGoalWithAssist}>
                                    <label htmlFor="selectAwayScorer">Select scorer:</label>
                                    <select name="selectAwayScorer" id="selectAwayScorer" matchid={currentMatch.id} >
                                        <option value=''>None</option>
                                        {fullAwaySquad && fullAwaySquad.map(player => {
                                            return <option key={player.id} value={player.id}>{player.firstName + ' ' + player.lastName}</option>
                                        })}
                                    </select> <br />

                                    <label htmlFor="selectAwayAssist">Assist By:</label>
                                    <select name="selectAwayAssist" id="selectAwayAssist" matchid={currentMatch.id} >
                                        <option value=''>None</option>
                                        {fullAwaySquad && fullAwaySquad.map(player => {
                                            return <option key={player.id} value={player.id}>{player.firstName + ' ' + player.lastName}</option>
                                        })}
                                    </select> <br />

                                    <div><input type="button" value="Add Goal" onClick={(e) => { updateAwayGoal(e) }}/></div>
                                    <div><input type="button" value="Close" onClick={() => { setOpenAwayGoalWithAssist(false) }}/></div>

                                    </Modal>

                                    <div><input type="button" value="Close" onClick={() => { setOpenAwayGoalType(false) }}/></div>
                                    
                            </Modal>
                        </div>

                        <div>
                            <Modal isOpen={openAwayFoul}>
                                <div>
                                <label htmlFor="selectAwayFoulSubject">Who was fouled:</label>
                                    <select name="selectAwayFoulSubject" id="selectAwayFoulSubject" matchid={currentMatch.id} >
                                        <option value=''>Select</option>
                                        {fullAwaySquad && fullAwaySquad.map(player => {
                                            return <option key={player.id} value={player.id}>{player.firstName + ' ' + player.lastName}</option>
                                        })}
                                    </select> <br />
                                </div>

                                <div>
                                <label htmlFor="selectAwayOffender">Who committed the foul:</label>
                                    <select name="selectAwayOffender" id="selectAwayOffender" matchid={currentMatch.id} >
                                        <option value=''>Select</option>
                                        {fullHomeSquad && fullHomeSquad.map(player => {
                                            return <option key={player.id} value={player.id}>{player.firstName + ' ' + player.lastName}</option>
                                        })}
                                    </select> <br />
                                </div>

                                <div>
                                <label htmlFor="selectAwayCard">Card shown by referee:</label>
                                    <select name="selectAwayCard" id="selectAwayCard" matchid={currentMatch.id} required >
                                        <option value=''>Select</option>
                                        <option value='None'>None</option>
                                        <option value='yellow'>Yellow Card</option>
                                        <option value='red'>Red Card</option>
                                        
                                    </select> <br />
                                </div>

                                <div>
                                <label htmlFor="selectAwaySetPiece">Set piece awarded:</label>
                                    <select name="selectAwaySetPiece" id="selectAwaySetPiece" matchid={currentMatch.id} required >
                                        <option value=''>Select</option>
                                        <option value='free kick'>Free Kick</option>
                                        <option value='penalty'>Penalty</option>
                                        
                                    </select> <br />
                                </div>

                                <div><input type="button" value="Register Foul" onClick={ (e) => {submitAwayFoul(e)}} /></div>
                                <div><input type="button" value="Close" /></div>
                            
                            </Modal>
                        </div>

                    </div>
                    <div><input type='button' value='Start Match' /></div>


                </div>
            }
        </div>
    )
}

export default Match
