import useIsMobile from "../../../hooks/useIsMobile";
import "./ReminderBox.scss"

type Props = {}

interface Meal {
    name: string;
    time: string;
}

const get_meal_with_time = (num: number): Meal[] => {
    const meals: Meal[] = [
        { name: 'Breakfast', time: '8:00 AM' },
        { name: 'Lunch', time: '12:00 PM' },
        { name: 'Snack 1', time: '10:30 AM' },
        { name: 'Snack 2', time: '3:30 PM' },
        { name: 'Dinner', time: '6:00 PM' },
    ];

    if (num === 3) {
        return [meals[0], meals[1], meals[4]];
    } else if (num === 4) {
        return [meals[0], meals[1], meals[2], meals[4]];
    } else if (num === 5) {
        return [meals[0], meals[2], meals[1], meals[3], meals[4]];
    } else {
        return [];
    }
};

const ReminderBox = (_props: Props) => {
    let result: Meal[]  = get_meal_with_time(5);
    const isMobile=useIsMobile();
    if(isMobile)
        result =[result[0]];

    return (
        <div className="reminderContainer">
            {result.map((meal, index) => {
                return (
                    <div key={index} className="mealInfoContainer" style={{height:((90/result.length)+"%")}}>
                        <div key={index} className="mealInfo">
                            <p className="mealName">{meal.name}</p>
                            <p className="mealTime">{meal.time}</p>
                        </div>
                        {result.length===index+1?null:<hr className="reminderDivider"/>}
                    </div>
                )
            })}
        </div>

    )
}

export default ReminderBox


