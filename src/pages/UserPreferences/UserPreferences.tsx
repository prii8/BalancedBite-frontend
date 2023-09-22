import './componentStyles/UserPreference.scss'

import {useState } from "react"
import FormOne from './components/FormOne';
import FormTwo from './components/FormTwo';
import FormThree from './components/FormThree';
import { useAppSelector } from '../../redux/store';
import _ from 'lodash';

const ExcludedProperties = [
    "timestamp",
    "username",
    "email",
    "id",
    "calories",
    "carbs",
    "fats",
    "protien",
    "user_type",
    "dietplan"
  ];

function UserPreferences() {

    // const isMobile=useIsMobile();
    const { user } = useAppSelector(state => state)
    // console.log(user);

    const initialState = _.omit(user,ExcludedProperties);
    // console.log(initialState);
    

    const [stepper, setStepper] = useState(1)
    const [preferences, setPreferences] = useState(initialState)
    console.log(preferences);

    const getComponentBasedOnCondition = (condition: string | number) => {
        switch (condition) {
            case 1:
                return <div className='formConainer'> <> <FormOne preferences={preferences} setPreferences={setPreferences} setStepper={setStepper} /> </> </div>;
            case 2:
                return <div className='formConainer'> <> <FormTwo preferences={preferences} setPreferences={setPreferences} setStepper={setStepper} /> </> </div>;
            case 3:
                return <div className='formConainer'> <> <FormThree preferences={preferences} setPreferences={setPreferences} setStepper={setStepper} /> </> </div>;
            default:
                return <div className='formConainer'> <> <FormOne preferences={preferences} setPreferences={setPreferences} setStepper={setStepper} /> </> </div>;
        }
    };

    const getHeading = () =>{
        if(stepper == 1)
        return <h1>Personal Details</h1>;
        else if(stepper == 2)
        return <h1>Meal Preferences</h1>;
        else if(stepper==3)
        return <h1>End Goal</h1>
    }


    return (
        <>
            <div className="preferencesPage">
                <div className="pageHeadings">
                    <div className="stepperRow">
                        <h3 className="stepInfo">Step {stepper}</h3>
                    </div>
                    <div className="headingIntro">
                        <h6>Please fill in your</h6>
                        {getHeading()}
                    </div>
                </div>
                <div className="contentBox">
                    <h2 className="boxTitle"></h2>
                    {getComponentBasedOnCondition(stepper)}
                </div>
            </div>
        </>
    )


}

export default UserPreferences