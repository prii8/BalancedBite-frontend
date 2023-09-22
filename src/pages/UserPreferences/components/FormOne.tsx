import {
  PiGenderMaleBold,
  PiGenderFemaleBold,
  PiGenderNonbinaryBold,
  PiCheckBold,
} from "react-icons/pi";
import {  FaChevronRight } from "react-icons/fa";
import "./FormOne.scss";
import { useRef, useState } from "react";
import {  notification } from "antd";

const FormOne = ({ setStepper, setPreferences, preferences }: any) => {

  const radioCardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const genderInputRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [validate, setValidate] = useState(false);

  function handleRadio(index: number): void {
    radioCardRefs.current.forEach((item) => item?.classList.remove("active"));
    genderInputRefs.current.forEach((item) => item?.classList.remove("active"));
    radioCardRefs.current[index]?.classList.toggle("active");
    genderInputRefs.current[index]?.classList.toggle("active");
    setPreferences({
      ...preferences,
      gender: genderInputRefs.current[index]?.id,
    });
  }

  const handleAge = (e: any) => {
    setPreferences({ ...preferences, age: Number(e.target.value) });
  };

  const handleHeight = (e: any) => {
    setPreferences({ ...preferences, height: Number(e.target.value) });
  };

  const handleWeight = (e: any) => {
    setPreferences({ ...preferences, weight: Number(e.target.value) });
  };

  const handleValidation = () => {
    console.log(preferences.gender);
    
    if (preferences.gender==null) {
      notification.error({ message: <p>Gender Cannot be empty</p> });
      setValidate(false);
    }
    else if (preferences.age==null) {
      notification.error({ message: <p>Age Cannot be empty</p> });
      setValidate(false);
    }
    else if(preferences.height==null)
    {
      notification.error({ message: <p>Height Cannot be empty</p> });
      setValidate(false);
    }
    else if(preferences.weight==null)
    {
      notification.error({ message: <p>Weight Cannot be empty</p> });
      setValidate(false);
    }
    else{
      setValidate(true)
    }
  };

  function handleNext(): void {
    handleValidation();
    if (validate === true) setStepper((prev: any) => prev + 1);
  }

  return (
    <>
      <div className="formOne">
        <div className="genderContainer">
          <h3 className="containerTitle">Gender</h3>
          <div className="radioDivContainer">
            {["Male", "Female", "Non-binary"].map((gender, index) => (
              <div
                id={gender}
                key={index}
                onClick={()=>handleRadio(index)}
                ref={(el) => (radioCardRefs.current[index] = el)}
                className="radioCard"
              >
                <div
                  id={gender}
                  className="genderInput"
                  ref={(el) => (genderInputRefs.current[index] = el)}
                >
                  <i>
                    <PiCheckBold />
                  </i>
                </div>
                {gender === "Male" && (
                  <i id={gender}>
                    <PiGenderMaleBold />
                  </i>
                )}
                {gender === "Female" && (
                  <i id={gender}>
                    <PiGenderFemaleBold />
                  </i>
                )}
                {gender === "Non-binary" && (
                  <i id={gender}>
                    <PiGenderNonbinaryBold />
                  </i>
                )}
                <p id={gender} className="genderType">
                  {gender}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="ageContainer">
          <h3 className="containerTitle">Age</h3>
          <div className="inputLabelContainer">
            <input
              onChange={handleAge}
              className="textInput"
              type="number"
              name=""
              id=""
            />
          </div>
        </div>

        <div className="heightWeightContainer">
          <div className="heightContainer">
            <h3 className="containerTitle">Height</h3>
            <div className="heightCard">
              <input
                onChange={handleHeight}
                className="heightInput"
                type="number"
              />
              <p>cms</p>
            </div>
          </div>
          <div className="heightContainer">
            <h3 className="containerTitle">Weight</h3>
            <div className="heightCard">
              <input
                onChange={handleWeight}
                className="heightInput"
                type="number"
                name=""
                id=""
              />
              <p>kg</p>
            </div>
          </div>

          <div className="buttonGroup">
            <button onClick={handleNext} className="navButton">
              <p className="btnText">Next</p>
              <i className="btnIcon">
                <FaChevronRight />
              </i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormOne;
