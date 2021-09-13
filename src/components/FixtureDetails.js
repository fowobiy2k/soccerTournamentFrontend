
import { useState } from 'react';
import DisplayControl from './DisplayControl';

const FixtureDetails = ({ schedule, fixtures, startMatch, endMatch, lineup }) => {

    // const [homeLineup, setHomeLineup] = useState([]);
    // const [awayLineup, setAwayLineup] = useState([]);

    const doSomething = (e) => {
        console.log(e)
        console.log(e.target.attributes.id.value)
        document.getElementById(e.target.attributes.id.value).style.color = 'blue'
    }

    // Display full team list
    const displayList = (id) => {
        console.log('Clicked: ' + id)
        let stl = document.getElementById(id).style.display
        if (stl === "none") {
            document.getElementById(id).style.display = 'flex'
        } else document.getElementById(id).style.display = 'none'
    }

    const updateLineup = e => {
        console.log(e)
        let matchId = e.target.attributes.matchId.value
        let playerId = e.target.attributes.id.value
        let playerName = e.target.innerHTML
        let added = e.target.attributes.added.value
        let isHome = e.target.attributes.ishome.value
        let diplayArea = e.target.attributes.diplayarea.value

        console.log(matchId)
        console.log(playerId)
        console.log(playerName)
        console.log(added)

        fixtures.map((f) => {
            if (f.id.toString() === matchId) {
                console.log("Hello world")

                if (added === 'false') {

                    if (isHome === 'true') {
                        let fd = new FormData();
                        fd.append('matchId', f.id);
                        fd.append('playerId', playerId);

                        let url = '/modifyedition/fixture/list';
                        let req = new Request(url, {
                            body: fd,
                            method: 'PUT'
                        });

                        fetch(req);
                        // document.location.reload()
                        // console.log('Calling fetch in start')
                        // fetchEdition();
                        console.log("Done")

                        let lineBreak = document.createElement('br')
                        document.getElementById(diplayArea).append(playerName)
                        document.getElementById(diplayArea).append(lineBreak)
                    } else {
                        let fd = new FormData();
                        fd.append('matchId', f.id);
                        fd.append('playerId', playerId);

                        let url = '/modifyedition/fixture/list';
                        let req = new Request(url, {
                            body: fd,
                            method: 'PUT'
                        });

                        fetch(req);
                        // document.location.reload()
                        // console.log('Calling fetch in start')
                        // fetchEdition();
                        console.log("Done")

                        // Document.getElementById(displayArea).append(playerName)

                        // setAwayLineup([...awayLineup, playerName])
                        // console.log(awayLineup)

                        let lineBreak = document.createElement('br')
                        document.getElementById(diplayArea).append(playerName)
                        document.getElementById(diplayArea).append(lineBreak)
                    }

                }

            }
        })
    }

    return (
        <div>
            <h3 id='heading'>Match Control Panel</h3>
            <DisplayControl scheduleObject={schedule.firstRound}  updateLineup={updateLineup} displayList={displayList} />
            <DisplayControl scheduleObject={schedule.quarterFinals  }  updateLineup={updateLineup} displayList={displayList}  />
            <DisplayControl scheduleObject={schedule.semiFinals }  updateLineup={updateLineup} displayList={displayList} />
            <DisplayControl scheduleObject={schedule.finals  }  updateLineup={updateLineup} displayList={displayList} />

        </div>
    )
}

export default FixtureDetails
