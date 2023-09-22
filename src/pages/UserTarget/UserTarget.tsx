import './UserTarget.scss'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { useNavigate } from 'react-router-dom'
import { fetchDietFailure, fetchDietStart, fetchDietSuccess, userLogIdAdded } from '../../redux/slices/userSlice'
import axios from 'axios'
import { getDietUrl } from '../../utils/apiUtil'
type Props = {}

const UserTarget = (_props: Props) => {

    const {user}=useAppSelector(state=>state);
    const navigate = useNavigate();
    const dispatch=useAppDispatch();

    async function handleClick() {
        dispatch(fetchDietStart())
        try {
            const response = await axios.get(`${getDietUrl}${user.user_id}`);
            if (response.status === 200 || response.status === 201) {
                console.log('Diet fetched successfully');
                const recipes=response.data.diet.breakfast;
                const diet_id=response.data.diet.diet_id;
                const reduxData={recipes,diet_id}
                console.log('Response data:', response.data);
                dispatch(fetchDietSuccess(reduxData));
                dispatch(userLogIdAdded(response.data.user_log.user_log_id));
                navigate("/app/dashboard",{replace:true})
            }
        } catch (error: any) {
            console.log(error);
            dispatch(fetchDietFailure());
        }
    }

    return (
        <div className='target-page'>
            <div className='container-target'>
                <div className='text-target'>
                    <p className='first-head-target'>This is your final</p>
                    <p className='second-head-target'>DAILY DIET TARGET</p>
                </div>
                <div className='card-target'>
                    <p className='text-card'>Target:</p>
                    <div className='card-goals'>
                        <div className='goal-column'>
                            <p className='column-text'>Calories</p>
                            <p className='column-value'>{user?.calories}kcal</p>
                        </div>
                        <hr className='target-hr'/>
                        <div className='goal-column'>
                            <p className='column-text'>Carbs</p>
                            <p className='column-value'>{user?.carbs}gms</p>
                        </div>
                        <hr className='target-hr'/>
                        <div className='goal-column'>
                            <p className='column-text'>Protein</p>
                            <p className='column-value'>{user?.protien}gms</p>
                        </div>
                        <hr className='target-hr'/>
                        <div className='goal-column'>
                            <p className='column-text'>Fat</p>
                            <p className='column-value'>{user?.fats}gms</p>
                        </div>
                    </div>
                    <div style={{alignSelf:'center'}}>
                        <button  onClick={handleClick} className='target-button'>Generate Meal</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserTarget

