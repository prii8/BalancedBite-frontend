import Switch from 'antd/es/switch';
import './Profile.scss'

import image from '/src/assets/images/male.png'
import { LuEdit } from "react-icons/lu";
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import useIsMobile from '../../hooks/useIsMobile';
import { clearStore } from '../../redux/slices/userSlice';

const Profile = () => {
  const navigate = useNavigate()
  const { user } = useAppSelector(state => state)

  const onChange = (checked: boolean) => {
    console.log(`Notification Alerts are set to ${checked}`);
  };

  const editInfo = () => {
    navigate("/app/preferences", { replace: true })
  };

  const isMobile=useIsMobile();
const dispatch=useAppDispatch()

  return (
    <div className='profile-page'>
      <div className='profile-heading'>
        <p className='primary-heading'>Hey there, <span className='heading-username'>{user.username}!</span></p>
        <div className='heading-container'>
          <p className='secondary-heading'>Your Profile</p>
          
          <button className='edit-button' onClick={editInfo}><LuEdit className='edit-logo-profile' /></button>
        </div>
      </div>
      <div className='profile-cards'>
        <div className='user-info'>
          <div className='personal-info'>
            <div className='image-div'>
              <img className='profile-image' src={image} />
            </div>
            <div className='info-div'>
              <p className='info-name'>{user.username}</p>
              <p className='info-email'>{user.email}</p>
            </div>
          </div>
          <div className='header-info'>
            <p className='header-name'>Your Details</p>
          </div>
          <div className='details'>
            <p className='detail-label'>Gender</p>
            <input type='text' disabled={true} value={user.gender} className={`detail-info ${false ? 'detail-info-editable' : ''}`} />
          </div>
          <div className="horizontal-line" />
          <div className='details'>
            <p className='detail-label'>Age</p>
            <input type='text' disabled={true} value={user.age} className={`detail-info ${false ? 'detail-info-editable' : ''}`} />
          </div>
          <div className="horizontal-line" />
          <div className='details'>
            <p className='detail-label'>Height</p>
            <input type='text' disabled={true} value={user.height} className={`detail-info ${false ? 'detail-info-editable' : ''}`} />
          </div>
          <div className="horizontal-line" />
          <div className='details'>
            <p className='detail-label'>Weight</p>
            <input type='text' disabled={true} value={user.weight} className={`detail-info ${false ? 'detail-info-editable' : ''}`} />
          </div>
          <div className="horizontal-line" />
          <div className='details'>
            <p className='detail-label'>No. of Meals</p>
            <input type='text' disabled={true} value={user.no_meals} className={`detail-info ${false ? 'detail-info-editable' : ''}`} />
          </div>

          <div className='header-info'>
            <p className='header-name'>Settings</p>
          </div>

          <div className='details'>
            <p className='detail-label'>Notifications</p>
            <Switch defaultChecked onChange={onChange} className='switch' />
          </div>
          <div className="horizontal-line" />
          <div className='details'>
            <p className='detail-label'>Account Plan</p>
            <Switch defaultChecked={false} onChange={onChange} className='switch' />
          </div>
        </div>

        <div className='other-info'>
          <div className='meal-preferences'>
            <div className='header-info'>
              <p className='header-name'>Food Preferences</p>
            </div>
            <div className='details'>
              <p className='detail-label'>Meal Type</p>
              <input type='text' disabled={true} value={user.diet_type} className={`detail-info ${false ? 'detail-info-editable' : ''}`} />
            </div>
            <div className="horizontal-line" />
            <div className='details'>
              <p className='detail-label'>Cuisine Type</p>
              <input type='text' disabled={true} value={user.cuisine_type} className={`detail-info ${false ? 'detail-info-editable' : ''}`} />
            </div>
            <div className="horizontal-line" />
            <div className='details'>
              <p className='detail-label'>Allergies</p>
              <input type='text' disabled={true} value="None" className={`detail-info ${false ? 'detail-info-editable' : ''}`} />
            </div>
            <div className="horizontal-line" />
            <div className='details'>
              <p className='detail-label'>Activity</p>
              <input type='text' disabled={true} value={user.activity_level} className={`detail-info ${false ? 'detail-info-editable' : ''}`} />
            </div>
            <div className="horizontal-line" />
            <div className='details-end'>
              <p className='detail-label'>End Goal</p>
              <input type='text' disabled={true} value={user.end_goal} className={`detail-info ${false ? 'detail-info-editable' : ''}`} />
            </div>
          </div>


          <div className='subscription-card'>
            <div className='header-info'>
              <p className='header-name'>Subscription</p>
            </div>
            <div className='details'>
              <p className='detail-label'>Active Plan</p>
              <input type='text' disabled={true} value='Premium' className='detail-info' />
            </div>
            <div className="horizontal-line" />
            <div className='details'>
              <p className='detail-label'>Valid From</p>
              <input type='text' disabled={true} value='10 August 2023' className='detail-info' />
            </div>
            <div className="horizontal-line" />
            <div className='details'>
              <p className='detail-label'>Valid Till</p>
              <input type='text' disabled={true} value='9 September 2023' className='detail-info' />
            </div>
            <div className="horizontal-line" />
            <button className='plan-button'>Change Plan</button>
          </div>
        </div>
      </div>
      {isMobile&&<button onClick={()=>{dispatch(clearStore());navigate("/")}} className='save-button'>Log Out</button>}
    </div>
  )
}

export default Profile