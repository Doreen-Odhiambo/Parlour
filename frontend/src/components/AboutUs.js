import React,{Component}  from 'react'
// import './styles/AboutUs.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faFacebook,
    faTwitter,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";
  export default class AboutUs extends Component{
    render(){
        return(
            <div>
                <div className="chan">
                    <div className="chanpic">
                    <img src= {AboutUs} alt="none" width="400px" height="400px"/> 
                    </div>
                    <div className ="chanwords">
                        <h1>Get prim and proper with us</h1>
                        <h3>Beauty doesn't have to be painful. .</h3>
                        <p>Shawn Parlour is a family-possessed business committed to giving perfection to our administration!<br />
                         Our committed group of beauticians, nails, and skin specialists accompany innumerable long periods of involvement in the magnificence business.<br />
                         We endeavor to make each customer our need, ensuring we tune in to everything about that we feature every individual’s common magnificence. <br />We're Located at Twin Park’s Centre, Shawn Palour provides you a range of highly trendy hair cuts
                         and styling, makeup, hair coloring, waxing services, spray tanning and facials.<br />
                         It was established in the year 2018 and has a team of highly skilled and experienced stylists.
                         </p>
                      <div className="social">
                      <div>
                        <a href="https://github.com/Doreen-Odhiambo"
                        className="github social">
                        <FontAwesomeIcon icon={faGithub} size="2x"  />
                        </a>
                        </div>
                        <div>
                        <a href="https://www.facebook.com/washington.capron.77"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                         </div>
                        <div><a href="https://twitter.com/ayiemba_elidah" className="twitter social">
                        <FontAwesomeIcon icon={faTwitter}  size="2x"/>
                        </a>
                        </div> 
                        <div>
                        <a href="https://www.instagram.com/odhiambo_doreen/"
                        className="instagram social">
                        <FontAwesomeIcon icon={faInstagram}  size="2x"/>
                        </a>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        )
    }
  }
