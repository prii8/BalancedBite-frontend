import React from 'react';
import './splash.scss';
import image from "../../assets/images/splash.png"
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/images/logo11.png"

const Splash: React.FC = () => {

  const navigate = useNavigate();

  return (
    <div className="splash-mobile-screen">
      <img className="splash-background-image" src={image} alt="background" />
      <div className="splash-centered-text">
        <i className="splash-frame"><img className="splash-logo" src={logo} alt="logo" /></i>
        <p className="splash-first">BALANCE</p>
        <p className="splash-second">Your nutrition</p>
        <p className="splash-third">Create your own personalized</p>
        <p className="splash-third">nutrition routine</p>
      </div>
      <button className="splash-bottom-button" onClick={()=>navigate('/register')}>Get Started</button>
    </div>
  );
};

export default Splash;