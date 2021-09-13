
const Nav = ( { changeEdition, editionList } ) => {
    return (
        
        <div>
        <div>
        <nav className= "nav">
            <ul className= "nav-links">
                <li><a href="/">Home</a></li>
                {/* <li><a href="/a">About</a></li> */}
                <li><a href="b">Teams</a></li>
                <li><a href="b">Scorers</a></li>
                <li><a href="/admin">Admin</a></li>
                {/* <Link className='link' to={`/match/${scheduleObject[game].matchId}`}><div className="">Enter Site</div></Link> */}
            </ul>
        </nav>
        </div>
        <div>
        <nav className= "nav">
            <ul className= "nav-links">
                
                <li>
                <label htmlFor="editionSelector">Select Edition:</label>
                    <select name="editionSelector" id="editionselector" onChange={changeEdition}>
                        { editionList && editionList.map( yr => {
                            return <option key={ yr } value={ yr }>{ yr }</option>
                        })}
                    </select> 
                </li>
            </ul>
        </nav>
        </div>
        </div>
    )
}

export default Nav
