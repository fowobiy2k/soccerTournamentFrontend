import bloom from '../img/Bloom.jpeg'
import dominion from '../img/Dominion.jpeg'
import excel from '../img/Excel.jpeg'
import h2h from '../img/H2H.jpeg'
import nero from '../img/Nero.jpeg'
import pioneers from '../img/Pioneers.jpeg'
import spinach from '../img/Spinach.jpeg'
import talented from '../img/Talented.jpeg'
import { Link } from 'react-router-dom'

const Teams = ( {list} ) => {
    return (
        <div className="teams">
            <div className="ppt"><span>participating teams:</span></div>
            <div className="team-grid">
                {/* { <img src= { require('../img/pft_poster.jpeg').default } alt="Poster" width='5%' height='5%' /> } */}
            {list.map( (team) => {
                let str = team.name
                let length = str.length
                let url = str.slice(0, (length - 3))
                console.log('url')
                console.log(url)
                // let fullURL = `../img/${url}.jpeg`
                let fullURL = `C:/Users/Oluwatosin/Documents/frontend_projects/react/pft-2021/src/img/Bloom.jpeg`
                return <div className='team-name-logo' key={team.id + "d"} >
                    {/* <img src= { require('../img/poster_' + team.id + '.jpeg').default } alt="Poster" width='5%' height='5%' />                 */}
                    {/* <img src= { require('../img/poster_2.jpeg').default } alt="Poster" width='5%' height='5%' />                 */}
                    {/* <img src= { require('../img/Bloom.jpeg').default } alt="Poster" width='5%' height='5%' />                 */}
                    {/* <img src= { require(fullURL).default } alt="Poster" width='5%' height='5%' /> */}
                    {/* <img src= {images.Bloom} alt="Poster" width='5%' height='5%' /> */}

                    { team.name === 'Bloom FC' && <div className='team-logo'><img src= {bloom} alt="Poster" /></div> }
                    { team.name === 'Dominion FA' && <div className='team-logo'><img src= {dominion} alt="Poster" /></div>  }
                    { team.name === 'Excel FA' && <div className="team-logo"><img src= {excel} alt="Poster" /></div>  }
                    { team.name === 'H2H FA' && <div className="team-logo"><img src= {h2h} alt="Poster" /></div>  }
                    { team.name === 'Nero FA' && <div className="team-logo"><img src= {nero} alt="Poster" /></div>  }
                    { team.name === 'Pioneers FA' && <div className="team-logo"><img src= {pioneers} alt="Poster" /></div>  }
                    { team.name === 'Spinach FA' && <div className="team-logo"><img src= {spinach} alt="Poster" /></div>  }
                    { team.name === 'Talented FA' && <div className="team-logo"><img src= {talented} alt="Poster" /></div>  }

                    {/* <p className='team' key= {team.id}>{team.name}</p> */}
                    <span className=''><Link to={`/team/${team.id}`}>{team.name}</Link></span>
                </div>  
            })}
            </div>
        </div>
    )
}

export default Teams
