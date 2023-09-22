import { useNavigate } from "react-router-dom"
import logo from "../../../assets/images/logo.png"
import "./landingPageNavBar.scss"
type Props = {}

const LandingPageNavBar = (_props: Props) => {

    const navigate=useNavigate();

  return (
    <nav className='nav-class'>
                <div className="navbar-homepage">
                    <div className="logo-homepage">
                        <a href="/home">
                            <img className="logo" src={logo} alt="LOGO"/>
                            <h1 className='paragraph'>Balanced Bite</h1>
                        </a>
                    </div>
                    <div className='links'>
                        <ul>
                            <li><a href="/home#Features">Features</a></li>
                            <li><a href="/home#Pricing">Pricing</a></li>
                            <li><a href="/home#Testimonials">Testimonials</a></li>
                            <li><a href="/home#FAQ's">FAQ's</a></li>
                            <li><a href="/home#ContactUs">Contact us</a></li>
                        </ul>
                    </div>
                    <div className='button-group-homepage'>
                            <button onClick={()=>navigate("/register")} className='signup-button'>Get Started</button>
                    </div>
                </div>
            </nav>
  )
}

export default LandingPageNavBar