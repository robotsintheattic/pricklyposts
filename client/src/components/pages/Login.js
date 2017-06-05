import React, { Component } from 'react'
import logoOne from '../../img/logo-1.png'
import logoTwo from '../../img/logo-2.png'
import CactusAbout from '../../img/Cactus_5.png'
import Logo from '../../img/Cactus_6.png'
import Github from '../../img/github.png'
import Instagram from '../../img/instagram.png'
import LoginButton from './../buttons/loginButton'

import Scroll from 'react-scroll'

const Link = Scroll.Link
const Events = Scroll.Events
const scrollSpy = Scroll.scrollSpy


class Login extends Component {
  constructor(props) {
    super(props)

    if (this.props.location.hash) {
      let token = this.props.location.hash.split('=')[1]
      localStorage.setItem('token', token)
      window.location.href = '/journals'
    }
  }

  componentDidMount() {
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div className="App">
        <div className="container App-content">
          <h1 className="App-title">
            <img className="logo-1" alt="svg of a cactus" src={logoOne} />
            <img className="Cactus-logo" alt="svg of a cactus" src={Logo} />
            <img className="logo-2" alt="svg of a cactus" src={logoTwo} />
          </h1>
          <LoginButton />
        </div>
        <div className="read-more-about container-fluid">
          <Link activeClass="active" to="login-about" spy={true} smooth={true} offset={50} duration={1000} onSetActive={this.handleSetActive}>
            <span className="glyphicon glyphicon-menu-down login-arrow-about" aria-hidden="true"></span>
          </Link>
        </div>
        <div className="container-fluid login-about" id="login-about">
          <div className="about-container">
            <div className="about-content row">
              <h1>READY TO BEGIN?</h1>
              <img className="about-cactus-img" src={CactusAbout} alt="cactus"/>
              <h4 className="about-tagline">Prickly Posts is a journaling platform that allows you to creatively explore and discover the beauty of Bullet Journaling without a degree in Caligraphy.</h4>
            </div>
          </div>
        </div>
        <div className="container-fluid read-more-explore">
          <Link activeClass="active" to="login-explore" spy={true} smooth={true} offset={50} duration={1000} onSetActive={this.handleSetActive}>
            <span className="glyphicon glyphicon-menu-down login-arrow-explore" aria-hidden="true"></span>
          </Link>
        </div>
        <div className="container-fluid login-explore" id="login-explore">
          <div className="container login-explore-content">
            <h1>WRITE & RECORD</h1>
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <span className="glyphicon glyphicon-list-alt explore-icons" aria-hidden="true"></span>
                <p className="login-explore-text">Record your thoughts and ideas <br /> in bullet size snippits</p>
              </div>
              <div className="col-sm-12 col-md-4">
                <span><img className="instagram-icon" src={Instagram} alt="instagram-icon"/></span>
                <p className="instagram-text">Integrate your recent Instagram <br />photos to customize entries</p>
              </div>
              <div className="col-sm-12 col-md-4">
                <span className="glyphicon glyphicon-grain explore-icons" aria-hidden="true"></span>
                <p className="login-explore-text">Explore your personal growth by <br /> browsing through past journals</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid login-footer">
          <a className="footer-link" href="https://github.com/jenniferwiner/pricklyposts"><img className="footer-git" src={Github} alt="github-logo"/></a>
          <p className="copyright">Prickly Posts &copy; 2017 All Rights Reserved.</p>
        </div>
      </div>
    )
  }
}

export default Login
