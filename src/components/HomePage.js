import 'bootstrap/dist/css/bootstrap.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import pic from '../img/pic2.jpg'
import logo from '../img/pft_logo_back.jpeg'
import pitch from '../img/pitch.jpg'
import logo1 from '../img/Talented.jpeg'
import logo2 from '../img/Excel.jpeg'
import facebook from '../img/icon_facebook.svg'
import instagram from '../img/icon_insta.svg'
import twitter from '../img/icon_twitter.svg'
import {Link} from 'react-router-dom'

const HomePage = () => {

    return (
        <div>
            <div className="hero-header">
                {/* <div>
                    <div><img src={pic} alt="Photo" /></div>
                    <div className="logo-div"><img src={logo} alt="Photo" /></div>
                </div> */}

                {/* <div className="hero-nav">
                <span>Home</span>
                <span>About</span>
                <span>Edition</span>
                <span>Fixtures</span>
            </div> */}

            </div>

            <div className='title-div'>
                <img src={logo} alt="Photo" />
                <h1>Pioneers Football Tournament</h1>
            </div>

            <div className="nav-bar">
            <span><a href='/'>Home</a></span>
                <span><a href='/about'>About</a></span>
                <span><a href='/editions'>Editions</a></span>
                <span><a href='/admin'>Admin</a></span>
            </div>

            <section className='about-section'>
                <div className="about">
                    <img src={pic} alt="Photo" />
                    
                </div>
            </section>

            <section className='landing-fixture'>
                <div className="single-landing-fixture">
                    <div className="trn-title">Results</div>
                    <div className='fixture-grid'>
                        <div className="home-logo fix"><img src={logo1} alt="photo" /></div>
                        <div className="home-name fix">Talented FA</div>
                        <div className="home-score fix">0</div>
                        <div className="vs fix">Vs</div>
                        <div className="away-logo fix"><img src={logo2} alt="photo" /></div>
                        <div className="away-name fix">Excel FA</div>
                        <div className="away-score fix">0</div>
                    </div>
                    {/* <a href=''>View scores</a> */}
                </div>
            </section>

            <section className="footer">
                <div className="socials">
                    <div>
                        <a href="#"><img src={facebook} alt="" /></a>
                    </div>

                    <div>
                        <a href="#"><img src={instagram} alt="" /></a>
                    </div>

                    <div>
                        <a href="#"><img src={twitter} alt="" /></a>
                    </div>

                </div>
                <div className="contact">
                    <address>
                        <b>Contact us:</b> <br/>
                        Springs Training pitch, <br />
                        Valley Estate, <br />
                        Lagos <br />
                    </address>
                </div>
            </section>
        </div>
    )
}
export default HomePage












// import 'bootstrap/dist/css/bootstrap.css'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
// import pic from '../img/pic2.jpg'
// import logo from '../img/pft_logo_back.jpeg'
// import pitch from '../img/pitch.jpg'
// import logo1 from '../img/Talented.jpeg'
// import logo2 from '../img/Excel.jpeg'
// import facebook from '../img/icon_facebook.svg'
// import instagram from '../img/icon_insta.svg'
// import twitter from '../img/icon_twitter.svg'
// import {Link} from 'react-router-dom'

// const HomePage = () => {

//     return (
//         <div>
//             <div className="hero-header">
//                 {/* <div>
//                     <div><img src={pic} alt="Photo" /></div>
//                     <div className="logo-div"><img src={logo} alt="Photo" /></div>
//                 </div> */}

//                 {/* <div className="hero-nav">
//                 <span>Home</span>
//                 <span>About</span>
//                 <span>Edition</span>
//                 <span>Fixtures</span>
//             </div> */}

//             </div>

//             <div className='title-div'>
//                 <img src={logo} alt="Photo" />
//                 <h1>Pioneers Football Tournament</h1>
//             </div>

//             <div className="nav-bar">
//             <span>Home</span>
//                 <span>About</span>
//                 <span>Edition</span>
//                 <span>Fixtures</span>
//             </div>

//             <section className='about-section'>
//                 <div className="about">
//                     <img src={pic} alt="Photo" />
                    
//                 </div>
//             </section>

//             <section className='landing-fixture'>
//                 <div className="single-landing-fixture">
//                     <div className="trn-title">Results</div>
//                     <div className='fixture-grid'>
//                         <div className="home-logo fix"><img src={logo1} alt="photo" /></div>
//                         <div className="home-name fix">Talented FA</div>
//                         <div className="home-score fix">0</div>
//                         <div className="vs fix">Vs</div>
//                         <div className="away-logo fix"><img src={logo2} alt="photo" /></div>
//                         <div className="away-name fix">Excel FA</div>
//                         <div className="away-score fix">0</div>
//                     </div>
//                     <a href=''>View scores</a>
//                 </div>
//             </section>

//             <section className="footer">
//                 <div className="socials">
//                     <div>
//                         <a href="#"><img src={facebook} alt="" /></a>
//                     </div>

//                     <div>
//                         <a href="#"><img src={instagram} alt="" /></a>
//                     </div>

//                     <div>
//                         <a href="#"><img src={twitter} alt="" /></a>
//                     </div>

//                 </div>
//                 <div className="contact">
//                     <address>
//                         <b>Contact us:</b> <br/>
//                         Springs Training pitch, <br />
//                         Valley Estate, <br />
//                         Lagos <br />
//                     </address>
//                 </div>
//             </section>
//         </div>
//     )
// }
// export default HomePage