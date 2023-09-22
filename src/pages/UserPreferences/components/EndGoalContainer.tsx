import { useRef } from 'react';
import { FaWeight, FaBalanceScale, FaArrowCircleUp } from 'react-icons/fa';
import { PiCheckBold } from 'react-icons/pi';

const EndGoalContainer = ({setPreferences,preferences}:any) => {
    const radioCardRefs = useRef<Array<HTMLDivElement | null>>([]);
    const endGoalInputRefs = useRef<Array<HTMLDivElement | null>>([]);

    function handleRadio(index: number): void {
        radioCardRefs.current.forEach((item) => item?.classList.remove("active"));
        endGoalInputRefs.current.forEach((item) => item?.classList.remove("active"));
        radioCardRefs.current[index]?.classList.toggle("active");
        endGoalInputRefs.current[index]?.classList.toggle("active");
        setPreferences({...preferences,end_goal:endGoalInputRefs.current[index]?.id});
    }

    const endGoalData = [
        { name: "Lose Weight", icon: <FaWeight /> },
        { name: "Maintain Weight", icon: <FaBalanceScale /> },
        { name: "Gain Weight", icon: <FaArrowCircleUp /> },
    ];

    return (
        <div className="endGoalContainer">
            <h3 className="containerTitle">End Goal</h3>
            <div className="radioDivContainer">
                {endGoalData.map((goal, index) => (
                    <div id={goal.name} key={index} onClick={() => handleRadio(index)} ref={(el) => (radioCardRefs.current[index] = el)} className="radioCard">
                        <div id={goal.name} className="endGoalInput" ref={(el) => (endGoalInputRefs.current[index] = el)}>
                        <i><PiCheckBold/></i>
                        </div>
                        <i id={goal.name}>{goal.icon}</i>
                        <p id={goal.name} className="goalType">{goal.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EndGoalContainer;
