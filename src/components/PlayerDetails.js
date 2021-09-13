import { useState, useEffect } from 'react'

const PlayerDetails = ({ match: { params: { id } }, fetchPlayer }) => {

    const [ player,setPlayer ] = useState()

    useEffect(() => {
        const getPlayer = async () => {
            let res = await fetchPlayer(id);
            setPlayer(res);


            console.log('current player')
            console.log(player)
            // setHomeLineUp(currentMatch.homeLineUp)
        }

        getPlayer();
    }, [])

    return (
        <div>
            <h4>Player</h4>
            { player && <h4>{player.firstName}</h4>}
        </div>
    )
}

export default PlayerDetails
