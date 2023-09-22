import { GiHotMeal, GiPeanut, GiSlicedBread, GiButter } from "react-icons/gi"
import useIsMobile from "../../hooks/useIsMobile"
import "./timeline.scss"
import ruler from "../../assets/images/ruler.svg"
import { BsFillCaretDownFill } from "react-icons/bs"
import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import WaterProgress from "./components/WaterProgress"
import { useEffect, useState } from "react"
import axios from "axios"
import { getAvgCalories, getAvgCarbs, getAvgExpense, getAvgFats, getAvgProteins, getAvgWater, getChartData } from "../../utils/apiUtil"
import { useAppSelector } from "../../redux/store"
import { removeIsLoading, setIsLoading } from "../../redux/slices/userSlice"

const COLORS = ["#acc741", "#ef8d42", "#c5e399", "#f4b673", "#50c5fd"];

const Timeline = () => {
  const isMobile = useIsMobile()
  const { user } = useAppSelector(state => state)
  const [avgCal, setAvgCal] = useState(0)
  const [avgCarb, setAvgCarb] = useState(0)
  const [avgProtein, setAvgProtein] = useState(0)
  const [avgFat, setAvgFat] = useState(0)
  const [water, setWater] = useState(0)
  const [piedata, setPieData] = useState([])
  const [data, setData] = useState([])
  const [chartType, setchartType] = useState("calories")



  const getCarbs = async () => {
    try {
      console.log(user.user_id)
      const response = await axios.get(`${getAvgCarbs}${user.user_id}`);
      if (response.status === 200 || response.status === 201) {
        console.log('carb:', response.data.average_carbs);
        setAvgCarb(response.data.average_carbs);
      } else {
        console.log('Unexpected status code:', response.status);
      }
    } catch (error: any) {
      console.error('Error in getCarbs:', error.message);
    }
  }

  const getCals = async () => {
    try {
      const response = await axios.get(`${getAvgCalories}${user.user_id}`);
      if (response.status === 200 || response.status === 201) {
        console.log('cal:', response.data.average_calories);
        setAvgCal(response.data.average_calories);
      } else {
        console.log('Unexpected status code:', response.status);
      }
    } catch (error: any) {
      console.error('Error in getCals:', error.message);
    }
  }

  const getProteins = async () => {
    try {
      const response = await axios.get(`${getAvgProteins}${user.user_id}`);
      if (response.status === 200 || response.status === 201) {
        console.log('pro:', response.data.average_proteins);
        setAvgProtein(response.data.average_proteins);
      } else {
        console.log('Unexpected status code:', response.status);
      }
    } catch (error: any) {
      console.error('Error in getProteins:', error.message);
    }
  }

  const getFats = async () => {
    try {
      console.log(user.user_id)
      const response = await axios.get(`${getAvgFats}${user.user_id}`);
      if (response.status === 200 || response.status === 201) {
        console.log('fats:', response.data.average_carbs);
        setAvgFat(response.data.average_carbs)
      } else {
        console.log('Unexpected status code:', response.status);
      }
    } catch (error: any) {
      console.error('Error in getFats:', error.message);
    }
  }

  const getWater = async () => {
    try {
      
      const response = await axios.get(`${getAvgWater}${user.user_id}`);
      if (response.status === 200 || response.status === 201) {
        console.log('water:', response.data);
        setWater(Math.ceil(response.data.average_carbs))
      } else {
        console.log('Unexpected status code:', response.status);
      }
    } catch (error: any) {
      console.error('Error in getFats:', error.message);
    }
  }

  const getExpense = async () => {
    try {
      const response = await axios.get(`${getAvgExpense}${user.user_id}`)
      if (response.status === 200 || response.status === 201) {
        console.log('Data:', response.data);
        setPieData(response.data)
      } else {
        console.log('Unexpected status code:', response.status);
      }
    } catch (error: any) {
      console.error('Error in expense:', error.message);
    }
  }

  const bmi = Math.ceil(user.weight / ((user.height / 100) ** 2));
  const checkHealthStatus = (bmi: number) => {
    if (bmi >= 18.5 && bmi <= 24.9) {
      return "You're Healthy";
    } else {
      return "You're Unhealthy";
    }
  }

  const interpolateValue = (x: number) => {
    const output = (x - 15) * 100 / 15;
    if (output > 100) {
      return 100;
    } else if (output < 0) {
      return 0;
    } else {
      return output;
    }
  };

  useEffect(() => {
    // setIsLoading()
    Promise.all([getCarbs(), getCals(), getProteins(), getFats(), getExpense(), getWater()])
      .catch((error) => console.error('Error in Promise.all:', error.message));
    // removeIsLoading()
  }, []);

  useEffect(() => {
    const fetchChart = async () => {
      const temp = chartType + '/' + user.id;
      const url = `${getChartData}${temp}`
      console.log(url);
      try {
        const response = await axios.get(url)
        let tempData = response.data;
        const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const convertedData = tempData.map((item: any) => {
          const timestamp = new Date(item.timestamp);
          const day = dayOfWeek[timestamp.getUTCDay()];
          return {
            ...item,
            day
          };
        });
        console.log(convertedData);
        setData(convertedData)
      } catch (error) {

      }
    }
    setIsLoading()
    fetchChart()
    removeIsLoading()
  }, [chartType])


  function handleChart(e: any): void {
    setchartType(e.target.value)
  }

  const getMealsByIndex = (index: number): { name: string; color: string }[] => {
    switch (index) {
      case 3:
        return [
          { name: 'Breakfast', color: COLORS[0] },
          { name: 'Lunch', color: COLORS[1] },
          { name: 'Dinner', color: COLORS[3] }
        ];
      case 4:
        return [
          { name: 'Breakfast', color: COLORS[0] },
          { name: 'Lunch', color: COLORS[1] },
          { name: 'Snack 1', color: COLORS[2] },
          { name: 'Dinner', color: COLORS[3] }
        ];
      case 5:
        return [
          { name: 'Breakfast', color: COLORS[0] },
          { name: 'Snack 1', color: COLORS[2] },
          { name: 'Lunch', color: COLORS[1] },
          { name: 'Snack 2', color: COLORS[4] },
          { name: 'Dinner', color: COLORS[3] }
        ];
      default:
        throw new Error('Invalid index. Please provide a valid index (3, 4, or 5).');
    }
  };

  return (
    <div className="timelinePage">
      <div className="pageHeading">
        <p className="introHeading"><strong>Your</strong> healthy journey:</p>
        <h1 className="pageTitle">MY PROGRESS</h1>
      </div>
      <div className="contentBox">
        {isMobile ? <h2 className="boxTitle">Upcoming Meals</h2> : <h1 className="boxTitle">Check how far you've come</h1>}
        <div className="timelineCardSection">
          <div className="timelineCardContainer">
            <div className="timelineCard">
              <div className="iconContainer">
                <i><GiHotMeal /></i>
              </div>
              <div className="cardInfo">
                <h2 className="cardTitle">Average Calories</h2>
                <h1 className="cardInfo">{Math.ceil(avgCal)}kcal</h1>
              </div>
            </div>
            <div className="timelineCard">
              <div className="iconContainer">
                <i><GiPeanut /></i>
              </div>
              <div className="cardInfo">
                <h2 className="cardTitle">Average Protein</h2>
                <h1 className="cardInfo">{Math.ceil(avgProtein)}Gm</h1>
              </div>
            </div>
            <div className="timelineCard">
              <div className="iconContainer">
                <i><GiSlicedBread /></i>
              </div>
              <div className="cardInfo">
                <h2 className="cardTitle">Average Carbs</h2>
                <h1 className="cardInfo">{Math.ceil(avgCarb)}Gm</h1>
              </div>
            </div>
            <div className="timelineCard">
              <div className="iconContainer">
                <i><GiButter /></i>
              </div>
              <div className="cardInfo">
                <h2 className="cardTitle">Average Fats</h2>
                <h1 className="cardInfo">{Math.ceil(avgFat)}Gm</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="timelineChartSection">
          <div className="barChartContainer">
            <h1 className="chartTitle">Your Macros</h1>

            <div className="chartInputs">
              <div className="durationSelectInput">
                <select onChange={handleChart} id="type-select">
                  <option disabled >Type</option>
                  <option style={{ fontSize: "1pt", backgroundColor: "rgba(233, 233, 233, 1)" }} disabled>&nbsp;</option>
                  <option selected>calories</option>
                  <option style={{ fontSize: "1pt", backgroundColor: "rgba(233, 233, 233, 1)" }} disabled>&nbsp;</option>
                  <option>carbs</option>
                  <option style={{ fontSize: "1pt", backgroundColor: "rgba(233, 233, 233, 1)" }} disabled>&nbsp;</option>
                  <option>proteins</option>
                  <option style={{ fontSize: "1pt", backgroundColor: "rgba(233, 233, 233, 1)" }} disabled>&nbsp;</option>
                  <option>fats</option>
                </select>
              </div>
              <div className="durationSelectInput">
                <select id="duration-select">
                  <option disabled selected>Last 7 Days</option>

                  {/* <option style={{ fontSize: "1pt", backgroundColor: "rgba(233, 233, 233, 1)" }} disabled>&nbsp;</option>
                  <option>Last 31 Days</option> */}
                </select>
              </div>
            </div>
            <div className="barChart">
              <ResponsiveContainer width="99%" height="99%" aspect={2.5}>
                <BarChart
                  data={data}
                >
                  <YAxis dataKey="calories" axisLine={false} tickLine={false} />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} />
                  <Bar dataKey="calories" fill="#EF8D42" barSize={18} radius={[16, 16, 16, 16]} />
                  <Tooltip isAnimationActive={true} trigger="hover" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="pieChartContainer">
            <h1 className="chartTitle">Your Expenditure</h1>
            <div className="pieChartWrapper">
              <div className="pieChart">
                <ResponsiveContainer height={"99%"} width={"99%"}>
                  <PieChart width={300} height={300}>
                    <Pie
                      dataKey="amount"
                      data={piedata}
                      cx="50%"
                      cy="50%"
                      innerRadius={isMobile?0:10}
                      outerRadius={isMobile?60:80}
                      fill={COLORS[3]}
                      label
                    >
                      {data.map((_entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>

                </ResponsiveContainer>

              </div>
              <div className="pieChartLegend">
                <ul className="legendList">
                  {getMealsByIndex(user.no_meals).map((item) => {
                    return (<li style={{ color: item.color }}>{item.name}</li>)
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="timelineStatsSection">
          <h2 className="sectionHeading">Your Body Health</h2>
          <div className="statsWrapper">

            <div className="heightAndWeight">
              <div className="heightCard">
                <p className="heightInfo">Height</p>
                <div className="heightContent">
                  <img src={ruler} alt="" />
                  <p className="height">{user.height}cms</p>
                </div>
              </div>
              <div className="heightCard">
                <p className="heightInfo">Weight</p>
                <div className="heightContent">
                  <img src={ruler} alt="" />
                  <p className="height">{user.weight}kg</p>
                </div>
              </div>
            </div>

            <div className="bmiCard">
              <h2 className="cardHeading">Body Mass Index {"(BMI)"}</h2>

              <div className="firstRow">
                <p className="bmiInfo">{bmi}</p>
                <div style={{ background: checkHealthStatus(bmi) == "You're Healthy" ? "#acc741" : "#fd4c4c", color: "white" }} className={`bmiStatus`} >
                  <p>{checkHealthStatus(bmi)}</p>
                </div>
              </div>

              <div className="secondRow">
                <i style={{ marginLeft: `calc(${interpolateValue(bmi)}% - 1rem)` }} ><BsFillCaretDownFill /></i>
                <div className="bmiBar"></div>
                <div className="markings">
                  <p>15</p>
                  <p>18.5</p>
                  <p>25</p>
                  <p>30</p>
                </div>
              </div>

            </div>

            <div className="waterIntakeCard">
              <p className="cardHeading">Average Water Intake</p>
              <div className="waterIntakeContainer">
                <div className="waterInfo">
                  <h2 className="waterContent">{water}/7 Oz</h2>
                </div>
                <div className="waterJar">
                  <WaterProgress topValue={water / 7 * 100} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Timeline