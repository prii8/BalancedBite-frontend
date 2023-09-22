import { useNavigate } from 'react-router-dom';
import image from "/src/assets/images/group.png";
import user from "/src/assets/images/user.png";
import location from "/src/assets/images/location.png";
import server from "/src/assets/images/server.png";
import './home.scss'
type Props = {}

const HomeSection = (_props:Props) => {
    const navigate=useNavigate();
    return(
        <div className='main-section-container'>
        <div className='first-div'>
            <div className='text-def'>
                <p className='primary-text'>Balanced Taste & Nutrition on Every Plate.</p>
                <p className='secondary-text'>Plan, Nourish, Thrive!</p>
                <button onClick={()=>navigate("/register")} className='div-button'>Get Started</button>
            </div>
            <div className='image-div-home'>
                <img className="image-home" src={image} />
            </div>
        </div>
        <div className='second-div'>
            <div className='container-div'>
                <img src={user}/>
                <p><strong>50+</strong><br />Users started their journey</p>
                <div className='vl' />
            </div>
            <div className='container-div'>
                <img src={location}/>
                <p><strong>8+</strong><br />Localised Meal Options </p>
                <div className='vl' />
            </div>
            <div className='container-div'>
                <img src={server} />
                <p><strong>30+</strong><br />Satisfied Users</p>
            </div>
        </div>
    </div>
    )
}

export default HomeSection