import "./dashboard.scss"
import ProgressCard from "./components/ProgressCard";
import ProgressBar from "./components/ProgressBar";
import ReminderBox from "./components/ReminderBox";
import { LuGlassWater } from "react-icons/lu"
import useIsMobile from "../../hooks/useIsMobile";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import DishCards from "./components/DishCards";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useState } from "react";
import axios from "axios";
import { fetchDietSuccess, fetchDietFailure } from "../../redux/slices/userSlice";
import { getMeal, updateUserLog } from "../../utils/apiUtil";
import { message } from "antd";
import CardLoader from "./components/CardLoader";
import CardLoaderMobile from "./components/CardLoaderMobile";

function getDaysFromMondayToSunday() {
  const today = new Date();
  const currentDay = today.getDay() - 1; // 0: Sunday, 1: Monday, ..., 6: Saturday

  const daysAndDates = Array.from({ length: 7 }, (_, i) => {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i - currentDay);
    const dateWithoutMonth = currentDate.toLocaleString('en-US', { day: 'numeric' });
    return {
      day: currentDate.toLocaleString('en-US', { weekday: 'long' }),
      date: dateWithoutMonth,
      isToday: currentDate.toDateString() === today.toDateString() ? 'active' : ''
    };
  });

  return daysAndDates;
}


const Dashboard = () => {

  const isMobile = useIsMobile();
  const daysAndDates = getDaysFromMondayToSunday();
  const dispatch = useAppDispatch();
  const { diet } = useAppSelector(state => state)
  const { user } = useAppSelector(state => state)
  const { user_log } = useAppSelector(state => state)

  const [currentMacros, setCurrentMacros] = useState({
    calories: 0.00001,
    carbs: 0.0000001,
    protien: 0.000001,
    fats: 0.000001,
    water: 0
  })

  const [isCardLoading, setIsCardLoading] = useState(false)


  const [activeMeal, setActiveMeal] = useState("breakfast")

  const getMealsByIndex = (index: number): string[] => {
    switch (index) {
      case 3:
        return ['breakfast', 'lunch', 'dinner'];
      case 4:
        return ['breakfast', 'lunch', 'snack1', 'dinner'];
      case 5:
        return ['breakfast', 'snack1', 'lunch', 'snack2', 'dinner'];
      default:
        throw new Error('Invalid index. Please provide a valid index (3, 4, or 5).');
    }
  }
  console.log(activeMeal);

  const handleMealButton = async (e: any) => {
    let mealInfo = e.target.innerText;
    setActiveMeal(mealInfo)
    setIsCardLoading(true)
    try {
      const response = await axios.get(`${getMeal}Macro${mealInfo}/${user.user_id}/${diet.diet_id}`);
      if (response.status === 200 || response.status === 201) {
        console.log('Diet fetched successfully');
        const dietData = response.data.diet[mealInfo];
        const diet_id = response.data.diet.diet_id;
        let reduxData = {
          "recipes": dietData,
          diet_id
        }
        console.log("redux", reduxData);
        console.log('Response data:', response.data);
        dispatch(fetchDietSuccess(reduxData));
        setIsCardLoading(false)
      }
    } catch (error: any) {
      console.log(error);
      dispatch(fetchDietFailure());
    }
  }

  async function handleAddWater(): Promise<void> {
    if (currentMacros.water < 7) {

      try {
        const response = await axios.put(`${updateUserLog}${user_log}`, { water_intake: 1 });
        if (response.status === 200 || response.status === 201) {
          console.log(response.data);
          message.success("Great Job")
          setCurrentMacros({ ...currentMacros, water: (currentMacros.water + 1) })
        }
      } catch (error: any) {
        console.log(error);
        dispatch(fetchDietFailure());
      }
    }

  }

  return (
    <div className="dashboardPage" >
      <div className="pageHeading">
        <p className="introHeading">Hey Welcome, <strong>{user?.username}</strong></p>
        <h1 className="pageTitle">MY DASHBOARD</h1>
      </div>
      <div className="contentBox">
        {isMobile ? <h2 className="boxTitle">Upcoming Meals</h2> : <h1 className="boxTitle">ALL ABOUT TODAY</h1>}

        <div className="progressSection">

          <div className="progressWrapper">

            <div className="progressCard">
              <ProgressCard currentMacros={currentMacros.calories} base={user.calories} type={"Calories"} />
            </div>
            <div className="progressCard">
              <ProgressCard currentMacros={currentMacros.carbs} base={user.carbs} type={"Carbs"} />
            </div>
            <div className="progressCard">
              <ProgressCard currentMacros={currentMacros.protien} base={user.protien} type={"Protien"} />
            </div>
            <div className="progressCard">
              <ProgressCard currentMacros={currentMacros.fats} base={user.fats} type={"Fats"} />
            </div>
          </div>
          <div className="reminderWrapper">
            <h1 className="wrapperHeading">Reminders</h1>
            <ReminderBox />
          </div>
          <div className="waterIntakeWrapper">
            <h2 className="wrapperHeading">Revitalize. Stay Hydrated.</h2>
            <div className="waterProgress">
              <i className="waterIcon"> <LuGlassWater />  </i>
              <ProgressBar progress={Math.ceil(currentMacros.water / 7 * 100)} />
              <button style={{ cursor: "pointer" }} onClick={handleAddWater} className="addWaterButton">+</button>
            </div>
            <div className="waterInfo">
              <p>{(7 - currentMacros.water) > -1 ? (7 - currentMacros.water) : 0} Glasses Reamaining</p>
              <p className="addBtnInfo">Add</p>
            </div>
          </div>
        </div>
        <div className="recipeSection">
          <h2 className="sectionHeading"> <strong>your</strong>  delightful meal plan</h2>
          <div className="weekSelector">
            {isMobile ?
              (<div className={`dateAndDay`}>
                {isMobile && <i> <AiOutlineLeft /> </i>}
                <div className="dateAndDayWrapper">
                  <h4 className="date">{daysAndDates[0].date} , </h4>
                  <p className="day">&nbsp;{daysAndDates[0].day}</p>
                </div>
                {isMobile && <i><AiOutlineRight /></i>}
              </div>)
              :
              (daysAndDates.map((item, index) => (
                <div key={index} className={`dateAndDay ${item.isToday}`}>
                  <h4 className="date">{item.date}</h4>
                  <p className="day">{item.day} </p>
                </div>
              )))
            }
          </div>
          <div className="dishTypeSelector">
            <div className="dishButtonContainer">
              {getMealsByIndex(user?.no_meals).map((item, i) => {
                return <button onClick={handleMealButton} key={i} style={{ width: isMobile ? "" : 90 / 5 + "%" }} className={`dishButton ${item === activeMeal ? "active" : null}`}>{item}</button>
              })}
            </div>
          </div>
          <div className="recipeWrapper">
            <div className="dishCardsContainer">
              {isCardLoading ?
                <div className="dishCards">
                  <div style={{margin:"0"}} className="dishCardMobile">
                   {isMobile?<CardLoaderMobile/>:<CardLoader/>}
                  </div>
                  <div>
                   {isMobile?<CardLoaderMobile/>:<CardLoader/>}
                  </div>
                  <div>
                   {isMobile?<CardLoaderMobile/>:<CardLoader/>}
                  </div>
                </div>


                : <DishCards currentMacros={currentMacros} setCurrentMacros={setCurrentMacros} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard