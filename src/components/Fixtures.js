import FirstRound from './FirstRound';
import QuarterFinals from './QuarterFinals';
import SemiFinals from './SemiFinals';
import Display from './Display';


const Fixtures = ({ list, scheduleObject }) => {

    return (
        <div className="fixtures">
            <h3>Fixtures</h3>
            {/* {list.map((fixture) => {
                return <div className="fix-grp">
                    <div className="fixture-div match-div"><span>{fixture.homeTeam.name}</span> <b>VS</b> <span>{fixture.awayTeam.name}</span></div>
                    <div className="fixture-div date-div">{fixture.date ? <span>{fixture.date}</span> : <span>Pending</span>}</div>
                    <div className="fixture-div time-div">{fixture.time ? <span>{fixture.time}</span> : <span>Pending</span>}</div>
                </div>
            })} */}

            {console.log("First round object")}
            {console.log(scheduleObject.firstRound)}

            
            { scheduleObject && <Display scheduleObject={scheduleObject.SemiFinals} /> } 

            


            
        </div>


    )
}

export default Fixtures
