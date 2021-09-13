import React from 'react'
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Modal from 'react-modal';
import Body from './components/Body';
import Nav from './components/Nav';
import Teams from './components/Teams';
import FixtureDetails from './components/FixtureDetails';
import Live from './components/Live';
import CreateEdition from './components/CreateEdition';
import Footer from './components/Footer';
import CreatePlayer from './components/CreatePlayer';
import CreateTeam from './components/CreateTeam';
import CreateMatch from './components/CreateMatch';
import Banner from './components/Banner';
import Display from './components/Display';
import store from './components/redux/Store';
import ManageMatches from './components/ManageMatches';
import Options from './components/Options';
import Match from './components/Match';
import Landing from './components/Landing';
import Home from './components/Home';
import TeamDetails from './components/TeamDetails';
import PlayerDetails from './components/PlayerDetails';
import HomePage from './components/HomePage';
import * as actions from './components/redux/ActionTypes';
import StoreAccessTest from './components/StoreAccessTest';
import './App.scss';


// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');


// const axios = require('axios');



function App() {


  const [teams, setTeams] = useState([]);

  const [title, setTitle] = useState([]);

  const [schedule, setSchedule] = useState([]);

  const [edition, setEdition] = useState([]);

  const [years, setYears] = useState([]);

  const [myEdition, setMyEdition] = useState();

  const [testState, setTestState] = useState();

  // const [ fixtures, setFixtures ] = useState( [] );

  const [liveMatches, setLiveMatches] = useState([]);


  useEffect(() => {

    const getEdition = async () => {

      await fetchEdition();
      await fetchTitle();
      await fetchYears();
      await fetchSchedule();
      await storeEvent();
      await storeEvent2();
      await storeEvent3();
      // console.log(store.getState)

    }

    getEdition()

  }, [])



  // Fetch Edition
  const fetchEdition = async () => {

    const res = await fetch('/edition/fetchcurrent')
    const data = await res.json()

    console.log(data)

    setEdition(data);
    // setMyEdition(edition[0])

    setTeams(data.teams);
    // setFixtures(data.fixtures);
    data.fixtures.map((fixture) => fixture.live && setLiveMatches([...liveMatches, fixture]))

    // console.log(teams)
    // console.log(fixtures)
    // console.log(data.fixtures)

    return data
  }

  // Fetch Title
  const fetchTitle = async () => {


    const res = await fetch('/edition/gettitle')
    const data = await res.text()
    console.log(data)
    setTitle(data)

    return data
  }

  // Fetch Schedule
  const fetchSchedule = async () => {


    const res = await fetch('/getschedule')
    const data = await res.json()
    console.log("Schedule object")
    console.log(data)
    setSchedule(data)

    return data
  }

  // Fetch List Of Editions
  const fetchYears = async () => {


    const res = await fetch('/edition/fetchallyears')
    const data = await res.json()
    console.log(data)
    setYears(data)

    return data
  }

  // Fetch Match by ID
  const fetchMatchById = async (id) => {

    const res = await fetch('/match/fetchone/' + id)
    const data = await res.json()

    console.log('Match')
    console.log(data)

    
    return data
  }

  // Fetch Team by ID
  const fetchTeamById = async (id) => {

    const res = await fetch('/team/fetchone/' + id)
    const data = await res.json()

    console.log('Team')
    console.log(data)

    
    return data
  }

  // Fetch Player by ID
  const fetchPlayerById = async (id) => {

    const res = await fetch('/player/fetchone/' + id)
    const data = await res.json()

    console.log('Player')
    console.log(data)

    
    return data
  }

  // Fetch team players
  const fetchTeamSquad = async (name) => {

    const res = await fetch('/team/fetchsquad/' + name)
    const data = await res.json()

    console.log('List of Players')
    console.log(data)

    
    return data
  }

  // Fetch home lineup
  const fetchHomeLineup = async (id) => {

    const res = await fetch('/match/fetchHomeLineup/' + id)
    const data = await res.json()

    console.log('Home Lineup')
    console.log(data)

    
    return data
  }

  // Fetch away lineup
  const fetchAwayLineup = async (id) => {

    const res = await fetch('/match/fetchAwayLineup/' + id)
    const data = await res.json()

    console.log('Away Lineup')
    console.log(data)

    
    return data
  }

  // PUTRequest to update solo goal for home
  const putHomeSoloGoal = async (matchId, playerId) => {

    let fd5 = new FormData();
        fd5.append('playerId', playerId);
        fd5.append('matchId', matchId);

        let url5 = '/modifyEdition/goalevent';
        let req5 =new Request( url5, {
          body: fd5,
          method: 'PUT'
        } );

        fetch(req5);
  }

  // // PUTRequest to update solo goal for away team
  // const putAwaySoloGoal = async (matchId, playerId) => {

  //   let fd5 = new FormData();
  //       fd5.append('playerId', playerId);
  //       fd5.append('matchId', matchId);

  //       let url5 = '/modifyEdition/goalevent';
  //       let req5 =new Request( url5, {
  //         body: fd5,
  //         method: 'PUT'
  //       } );

  //       fetch(req5);
  // }

  // PUTRequest to update home goal with assist
  const putHomeGoal = async (matchId, scorerId, assistId) => {

    let fd5 = new FormData();
        fd5.append('scorerId', scorerId);
        fd5.append('matchId', matchId);
        fd5.append('assistId', assistId);

        let url5 = '/modifyEdition/goalassistevent';
        let req5 =new Request( url5, {
          body: fd5,
          method: 'PUT'
        } );

        fetch(req5);
  }

  // PUTRequest to update foul event
  const registerFoul = async (matchId, subject, offender, card, setPiece) => {

    let fd5 = new FormData();
        fd5.append('subjectId', subject);
        fd5.append('matchId', matchId);
        fd5.append('concededBy', offender);
        fd5.append('card', card);
        fd5.append('setPiece', setPiece);

        let url5 = '/modifyEdition/foulevent';
        let req5 =new Request( url5, {
          body: fd5,
          method: 'PUT'
        } );

        fetch(req5);
  }


  // Change Edition
  const changeEdition = async (e) => {

    let selectedYear = e.target.value
    console.log("selected Year: ")
    console.log(selectedYear)
    const res = await fetch('/edition/fetchone/' + selectedYear)
    const data = await res.json()
    console.log(data)
    setEdition(data)

    // let fd5 = new FormData();
    //     fd5.append('year', selectedYear);

    //     let url5 = new URL('/edition/fetchone'), params = {year: selectedYear};
    //     let req5 =new Request( url5, {
    //       body: fd5,
    //       method: 'GET'
    //     } );

    //     let fetchEditionOutput = fetch(req5);
    //     let EditionOutput = fetchEditionOutput.json()

    //     setEdition(EditionOutput)

  }


  const startMatch = id => {

    edition.fixtures.map((f) => {
      if (f.id === id) {
        setLiveMatches([...liveMatches, f])

        let fd5 = new FormData();
        fd5.append('matchId', f.id);

        let url5 = '/modifyedition/startlive';
        let req5 = new Request(url5, {
          body: fd5,
          method: 'PUT'
        });

        fetch(req5);
        // document.location.reload()
        // console.log('Calling fetch in start')
        // fetchEdition();
      }
    })
  }

  const endMatch = id => {

    edition.fixtures.map((f) => {
      if (f.id === id) {

        setLiveMatches(liveMatches.filter((m) => m.id !== id))
        let fd5 = new FormData();
        fd5.append('matchId', f.id);

        let url5 = '/modifyedition/endmatch';
        let req5 = new Request(url5, {
          body: fd5,
          method: 'PUT'
        });

        fetch(req5);

        // document.location.reload()
        // console.log('Calling fetch in end')
        // fetchEdition();
        console.log(liveMatches)
      }
    })

  }

  const updateSelectLineup = (matchId, playerId) => {

    // let matchId = e.target.attributes.matchid
    // let playerId = e.target.options[e.target.options.selectedIndex].value

    console.log('match id')
    console.log(matchId)
    console.log('player Id')
    console.log(playerId)

    edition.fixtures.map((f) => {
      if (f.id == matchId) {
        console.log("Hello world")

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
      }
    })
  }


  const updateLineup = e => {

    let matchId = e.target.attributes.matchid.value
    let playerId = e.target.attributes.id.value
    let added = e.target.attributes.added.value

    edition.fixtures.map((f) => {
      if (f.id === matchId) {
        console.log("Hello world")

        let fd = new FormData();
        fd.append('matchId', f.id);
        fd.append('matchId', playerId);

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
      }
    })
  }

  const submitForm = async (e, formId, destURL) => {

    e.preventDefault();

    let myForm = document.getElementById(formId)

    let response = await fetch(destURL, {
      method: 'PUT',
      body: new FormData(myForm)
    });

    console.log('hello1')

    myForm.reset()

    // let result = await response.json();
    // console.log('hello2')
    // alert(result.message);
  }

  const storeEvent = async () => {
    store.dispatch({
      type: actions.GOAL,
      message: "Goal scored"
    });
    store.dispatch({
      type: actions.FOUL,
      message: "Foul committed"
    });

    console.log(store.getState());
  }

  const storeEvent2 = async () => {
    store.dispatch({
      type: actions.GOAL
    });
    store.dispatch({
      type: actions.FOUL
    });

    console.log("method 2");
    console.log(store.getState());
  }

  const myObject = {
    type: actions.FOUL
  }

  const storeEvent3 = async () => {

    store.dispatch(myObject);

    console.log("method 3");
    console.log(store.getState());
  }


  return (
    <Router>
      <div className="App">

        {/* <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/admin'>Admin</Link>
        <Link className='link' to='/control'>Control</Link>
        <Link className='link' to='/create'>Create</Link>
        <Link className='link' to='/m'>route</Link> */}

        <Route path="/home2" exact render={(props) => (
          <>
            {/* {title && <div className="home-title"><span>{title}</span></div>} */}
            {/* {title && <h1>{edition.title}</h1>} */}
            {/* <Header /> */}
            {years && <Nav changeEdition={changeEdition} editionList={years} />}
            <Banner />
            <Body />
            {edition.teams ? <Teams list={edition.teams} /> : "Loading Edition"}
            {liveMatches.length > 0 && <Live liveFixtures={liveMatches} />}

            <StoreAccessTest />

            {schedule && <h4>First Round</h4>}
            {schedule && <Display obj={schedule.firstRound} />}

            {schedule && <h4>Semi Finals</h4>}
            {schedule && <Display obj={schedule.semiFinals} />}

            {schedule && <h4>Final</h4>}
            {schedule && <Display obj={schedule.finals} />}

            
          </>
        )} />

        {/* <Route path="/" exact render={(props) => (
          <>
            <Landing />

          </>
        )} /> */}

        <Route path="/home" render={props =>
          <>
            <Home years={years} changeEdition={changeEdition} liveMatches={liveMatches} schedule={schedule} edition={edition} />
          </>

        } />


        <Route path="/admin" render={(props) => (
          <>
            {edition.fixtures && <FixtureDetails schedule={schedule} fixtures={edition.fixtures} startMatch={startMatch} endMatch={endMatch} lineup={updateLineup} />}

          </>
        )} />

        <Route path="/control" render={(props) => (
          <>
            <Options />
          </>
        )} />

        <Route path="/create" render={(props) => (
          <>
            <CreateEdition />
            <CreateTeam onSubmit={submitForm}/>
            <CreatePlayer onSubmit={submitForm} />
            <CreateMatch onSubmit={submitForm} teams={edition.teams} />
          </>
        )} />

        <Route path="/m" render={props =>
          <ManageMatches scheduleObject={schedule} />

        } />

        <Route path="/" exact render={props =>
          <HomePage />

        } />

        <Route path="/match/:id" render={props =>
          <Match {...props} fetchMatch={fetchMatchById} fetchHome={fetchHomeLineup} fetchAway={fetchAwayLineup} updateLineup={updateSelectLineup} putHomeSoloGoal={putHomeSoloGoal} putHomeGoal={putHomeGoal} registerFoul={registerFoul} fetchTeamSquad={fetchTeamSquad} />

        } />

        <Route path="/team/:id" render={props =>
          <TeamDetails {...props} fetchTeam={fetchTeamById} />

        } />

        <Route path="/player/:id" render={props =>
          <PlayerDetails {...props} fetchPlayer={fetchPlayerById} />

        } />


        {/* <TestModal openModal={openModal} modalIsOpen={modalIsOpen} afterOpenModal={afterOpenModal} closeModal={closeModal} customStyles={customStyles} subtitle ={subtitle} /> */}

        {/* <Route path="/m/:id" component= {ManageMatches }/> */}

        <Route path="/home" exact component={Footer} />
      </div>
    </Router>
  );
}

export default App;
