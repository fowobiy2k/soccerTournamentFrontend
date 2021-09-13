import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div className="mobile-background">
            
            <div className='landing-image landing-background'><img src= { require('../img/pic2.jpg').default } alt="Poster" /></div> 
            <div className='landing-body'>
            <div className="landing-header landing-subject"><h3>Pioneers Football Tournament</h3></div>
                <div className='landing-image landing-subject'><img src= { require('../img/pft_logo_back.jpeg').default } alt="Poster" /></div> 
                
            </div>

            <Link className='link' to='/home'><div className="landing-button">Enter Site</div></Link>
            
        </div>
    )
}

export default Landing
