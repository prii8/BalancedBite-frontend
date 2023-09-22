import  { useRef } from 'react';
import { FaCouch, FaWalking, FaRunning, FaDumbbell, FaFire } from 'react-icons/fa';
import { PiCheckBold } from 'react-icons/pi';

const ActivityLevelContainer = ({setPreferences,preferences}:any) => {
    const radioCardRefs = useRef<Array<HTMLDivElement | null>>([]);
    const genderInputRefs = useRef<Array<HTMLDivElement | null>>([]);

    function handleRadio(index: number): void {
        radioCardRefs.current.forEach((item) => item?.classList.remove("active"));
        genderInputRefs.current.forEach((item) => item?.classList.remove("active"));
        radioCardRefs.current[index]?.classList.toggle("active");
        genderInputRefs.current[index]?.classList.toggle("active");
        setPreferences({...preferences,activity_level:genderInputRefs.current[index]?.id});
        
    }

    const activityLevelsData = [
        { name: "Sedentary", icon: <FaCouch  /> },
        { name: "Lightly Active", icon: <FaWalking  /> },
        { name: "Moderately Active", icon: <FaRunning  /> },
        { name: "Active", icon: <FaDumbbell  /> },
        { name: "Very Active", icon: <FaFire  /> },
    ];

    return (
        <div className="activityLevelContainer">
            <h3 className="containerTitle">Activity Level</h3>
            <div className="radioDivContainer">
                {activityLevelsData.map((activityLevel, index) => (
                    <div id={activityLevel.name} key={index} onClick={() => handleRadio(index)} ref={(el) => (radioCardRefs.current[index] = el)} className="radioCard">
                        <div id={activityLevel.name} className="genderInput" ref={(el) => (genderInputRefs.current[index] = el)}>
                            <i ><PiCheckBold/></i>
                        </div>
                        <i id={activityLevel.name}>{activityLevel.icon}</i>
                        <p id={activityLevel.name} className="genderType">{activityLevel.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActivityLevelContainer;
