import "./CustomLoader.scss";
import TeaSVG from "./TeaSVG/TeaSVG";

const CustomLoader = () => {
  return (
    <div className="loader-wrapper">
      <TeaSVG/>
      <h1 className="loader-text">Generating Perfect Meal Plan for You!</h1>
    </div>
  )
}
{/* <div className='loaderWrapper'>
      <h2 className="animate">Balanced <span>Bite.</span> </h2>
      <h3 className="animate subheading">Stay dedicated to your diet, and watch your health soar to new heights! 🚀🥗</h3>
    </div> */}
export default CustomLoader