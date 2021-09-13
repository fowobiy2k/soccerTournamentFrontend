import Nav from './Nav'
import Live from './Live'
import Display from './Display'
import Teams from './Teams'

const Home = ({ years, changeEdition, liveMatches, schedule, edition }) => {
    return (
        <div className='home-background'>

            <section className='navigation'>
            {/* {years && <Nav changeEdition={changeEdition} editionList={years} />} */}
            </section>
            
            <section className='teams'>
            {edition.teams ? <Teams list={edition.teams} /> : "Loading Edition"}
            </section>
            
            <section className='live-matches'>
            {liveMatches.length > 0 && <Live liveFixtures={liveMatches} />}
            </section>
            

            <section className='full-fixtures'>
            {schedule && <div className='stage'><h4>First Round</h4></div>}
            {schedule && <Display obj={schedule.firstRound} />}

            {schedule && <div className='stage'><h4>Semi Finals</h4></div>}
            {schedule && <Display obj={schedule.semiFinals} />}

            {schedule && <div className='stage'><h4>Final</h4></div>}
            {schedule && <Display obj={schedule.finals} />}
            </section>
            
        </div>
    )
}

export default Home
